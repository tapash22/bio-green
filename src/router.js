import { createRouter, createWebHistory } from 'vue-router';
import Client from './components/pages/Client.vue';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Products from './components/pages/Products.vue';
import Partners from './components/pages/Partners.vue';
import Blog from './components/pages/Blog.vue';
import Gallery from './components/pages/Gallery.vue';
import Contact from './components/pages/Contact.vue';
import Login from './components/pages/Login.vue';
import NotFound from './components/pages/NotFound.vue';
import BlogItem from './services/BlogItem.vue';


import Organicminarels from './ex_page/Organicminarels.vue';
import Feedsanitizer from './ex_page/Feedsanitizer.vue';
import Enzymes from './ex_page/Enzymes.vue';
import Essensialoil from './ex_page/Essensialoil.vue';
import Probiotics from './ex_page/Probiotics.vue';

import Prebioticsc from './ex_page/Prebioticsc.vue';
import Organicminarelsc from './ex_page/Organicminarelsc.vue';

import Essensialoila from './ex_page/Essensialoila.vue';
import Probioticsa from './ex_page/Probioticsa.vue';
import Organicminarelsa from './ex_page/Organicminarelsa.vue';


import Admin from './components/pages/Admin.vue';
import Dashboard from './components/admin/Dashboard.vue';
import User from './components/admin/User.vue';
import Product from './components/admin/Product.vue';
import Partner from './components/admin/Partner.vue';
import Photo from './components/admin/Photo.vue';
import Slider from './components/admin/Slider.vue';
import Events from './components/admin/Events.vue';
import Blogs from './components/admin/Blog.vue';
import { fb } from './firebase';


const routes = [
    {
        path: '/',
        component: Client,
        redirect:'home',
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About,},
            { path: 'products', component: Products, },
            { path: 'partners', component: Partners, },
            { path: 'blog', component: Blog, },
            { path: 'blog/:id',name:'BlogItem', component: BlogItem },
            { path: 'gallery', component: Gallery,},
            { path: 'contact', component: Contact, },
            { path: 'login',name:'Login', component: Login, },
            { path:'/:NotFound(.*)*', component: NotFound, },

            { path: 'essensialoil' , component: Essensialoil },
            { path: 'organicminarels' , component: Organicminarels },
            { path: 'feedsanitizer' , component: Feedsanitizer },
            { path: 'probiotics' , component: Probiotics },
            { path: 'enzymes' , component: Enzymes },

            { path: 'prebioticsc' , component: Prebioticsc },
            { path: 'organicminarelsc' , component: Organicminarelsc },

            { path: 'essensialoila' , component: Essensialoila },
            
            { path: 'probioticsa' , component: Probioticsa },
            { path: 'organicminarelsa' , component: Organicminarelsa },

        ]
    },

    {
        path: '/admin', component: Admin,  meta: { requiresAuth: true },
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'user', component: User },
            { path: 'product', component: Product },
            { path: 'Partner', component: Partner },
            { path: 'photo', component: Photo },
            { path: 'slider', component: Slider },
            { path: 'events', component: Events},
            { path: 'blog', component: Blogs },
        ]   
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    // const link = this.$router.path('/');
    // if(link){
    //     next('/home');
    // }
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