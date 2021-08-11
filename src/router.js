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
import Globalpartner from './components/sub_page/Globalpartner.vue';
import Localpartner from './components/sub_page/Localpartner.vue';
import Poultry from './components/sub_page/Poultry.vue';
import Ruminent from './components/sub_page/Ruminent.vue';
import Aqua from './components/sub_page/Aqua.vue';

import NonAntibiotic from './ex_page/NonAntibiotic.vue';
import Emulsifire from './ex_page/Emulsifire.vue';
import Enzymes from './ex_page/Enzymes.vue';
import Antioxident from './ex_page/Antioxident.vue';
import Renal from './ex_page/Renal.vue';

import Amonia from './ex_page/Amonia.vue';
import Immunostimulants from './ex_page/Immunostimulants.vue';
import Planton from './ex_page/Planton.vue';
import Probiotics from './ex_page/Probiotics.vue';
import Feed from './ex_page/Feed.vue';

import Ruminal from './ex_page/Ruminal.vue';
import Udder from './ex_page/Udder.vue';
import Uterin from './ex_page/Uterin.vue';
import Nutrisonal from './ex_page/Nutrisonal.vue';





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
            { path: 'gallery', component: Gallery,},
            { path: 'contact', component: Contact, },
            { path: 'login', component: Login, },
            { path: 'globalpartner', component: Globalpartner, },
            { path: 'localpartner', component: Localpartner, },
            { path: 'poultry' , component: Poultry },
            { path: 'ruminent' , component: Ruminent },
            { path: 'aqua' , component: Aqua },

            { path: 'nonAntibiotic' , component: NonAntibiotic },
            { path: 'emulsifire' , component: Emulsifire },
            { path: 'enzymes' , component: Enzymes },
            { path: 'antioxident' , component: Antioxident },
            { path: 'renal' , component: Renal },
           
            { path: 'probiotics' , component: Probiotics },
            { path: 'planton' , component: Planton },
            { path: 'immunostimulants' , component: Immunostimulants },
            { path: 'amonia' , component: Amonia },
            { path: 'feed' , component: Feed },

            { path: 'ruminal' , component: Ruminal },
            { path: 'uterin' , component: Uterin },
            { path: 'udder' , component: Udder },
            { path: 'nutrisonal' , component: Nutrisonal },
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