import { createRouter, createWebHistory } from 'vue-router';
import Client from './components/pages/Client.vue';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Products from './components/pages/Products.vue';
import Partners from './components/pages/Partners.vue';
import Blog from './components/pages/Blog.vue';
import Photos from './components/pages/Photos.vue';
import Contact from './components/pages/Contact.vue';
import Login from './components/pages/Login.vue';


import Admin from './components/pages/Admin.vue';
import Dashboard from './components/admin/Dashboard.vue';
import User from './components/admin/User.vue';
import Product from './components/admin/Product.vue';
import Partner from './components/admin/Partner.vue';
import Photo from './components/admin/Photo.vue';
import Slider from './components/admin/Slider.vue';
import Events from './components/admin/Events.vue';
import { fb } from './firebase';


const routes = [
    {
        path: '/',
        component: Client,
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About,},
            { path: 'products', component: Products, },
            { path: 'partners', component: Partners, },
            { path: 'blog', component: Blog, },
            { path: 'photos', component: Photos,},
            { path: 'contact', component: Contact, },
            { path: 'login', component: Login, },
        ]
    },

    {
        path: '/admin', component: Admin, meta: { auth: true },
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'user', component: User },
            { path: 'product', component: Product },
            { path: 'Partner', component: Partner },
            { path: 'photo', component: Photo },
            { path: 'slider', component: Slider },
            { path: 'events', component: Events},
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    const currentUser = fb.auth().currentUser;
    if (requiresAuth && !currentUser) {
        next('/login');
    } else if (requiresAuth && currentUser) {
        next();
    } else {
        next();
    }
});

export default router;