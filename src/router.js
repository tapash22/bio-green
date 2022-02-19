import { createRouter, createWebHistory } from 'vue-router';
import Client from './components/pages/Client.vue';


import Admin from './components/pages/Admin.vue';
import Dashboard from './components/admin/Dashboard.vue';
import User from './components/admin/User.vue';
import Product from './components/admin/Product.vue';
import Partner from './components/admin/Partner.vue';
import Photo from './components/admin/Photo.vue';
import Slider from './components/admin/Slider.vue';
import Events from './components/admin/Events.vue';
import Blogs from './components/admin/Blog.vue';



const routes = [
    {
        path: '/',
        component: Client,
        redirect:'home',
        children: [
            { path: 'home', component:( )=>import(/* webpackChunkName: "home" */'./components/pages/Home.vue') },
            { path: 'about', component:( )=>import(/* webpackChunkName: "about" */'./components/pages/About.vue')},
            { path: 'products', component:( )=>import(/* webpackChunkName: "products" */'./components/pages/Products.vue') },
            { path: 'products/:id',name:'ProductDetail', component:( )=>import(/* webpackChunkName: "ProductDetail" */'./services/ProductDatail.vue') },
            { path: 'partners', component:( )=>import(/* webpackChunkName: "partners" */'./components/pages/Partners.vue') },
            { path: 'blog', component:( )=>import(/* webpackChunkName: "blog" */'./components/pages/Blog.vue') },
            { path: 'blog/:id',name:'BlogItem',component:( )=>import(/* webpackChunkName: "BlogItem" */'./services/BlogItem.vue') },
            { path: 'gallery', component:( )=>import(/* webpackChunkName: "gallery" */'./components/pages/Gallery.vue')},
            { path: 'contact', component:( )=>import(/* webpackChunkName: "contact" */'./components/pages/Contact.vue') },
            { path: 'login',name:'Login', component:( )=>import(/* webpackChunkName: "login" */'./components/pages/Login.vue') },
            // { path:'/:catchAll(.*)', component: NotFound, },

            { path: 'essentialoil_poultry' , component:( )=>import(/* webpackChunkName: "essentialoil_poultry" */'./ex_page/Essensialoil.vue') },
            { path: 'organicminerals_poultry' , component:( )=>import(/* webpackChunkName: "organicminerals_poultry" */'./ex_page/Organicminarels.vue') },
            { path: 'feedsanitizer_poultry' , component:( )=>import(/* webpackChunkName: "feedsanitizer_poultry" */'./ex_page/Feedsanitizer.vue') },
            { path: 'postbiotic_poultry' , name:'Probiotics', component:( )=>import(/* webpackChunkName: "postbiotic_poultry" */'./ex_page/Probiotics.vue') },
            { path: 'enzymes_poultry' , component:( )=>import(/* webpackChunkName: "enzymes_poultry" */'./ex_page/Enzymes.vue') },

            { path: 'postbiotic_cattle' ,name:'Prebioticsc', component:( )=>import(/* webpackChunkName: "postbiotic_cattle" */'./ex_page/Prebioticsc.vue') },
            { path: 'organicminerals_cattle' , component:( )=>import(/* webpackChunkName: "organicminerals_cattle" */'./ex_page/Organicminarelsc.vue') },

            { path: 'essentialoil_aqua' , component:( )=>import(/* webpackChunkName: "essentialoil_aqua" */'./ex_page/Essensialoila.vue') },
            
            { path: 'postbiotic_aqua' ,name:'Probioticsa', component:( )=>import(/* webpackChunkName: "postbiotic_aqua" */'./ex_page/Probioticsa.vue') },
            { path: 'organicminerals_aqua' , component:( )=>import(/* webpackChunkName: "organicminerals_aqua" */'./ex_page/Organicminarelsa.vue') },
            { path: 'enzymes_aqua', component:( )=>import(/* webpackChunkName: "enzymes_aqua" */'./ex_page/EnzymesC.vue') },

            { path: 'poultry', component:( )=>import(/* webpackChunkName: "poultry" */'./services/Poultry.vue') },
            { path: 'cattle', component:( )=>import(/* webpackChunkName: "cattle" */'./services/Cattle.vue') },
            { path: 'aqua', component:( )=>import(/* webpackChunkName: "aqua" */'./services/Aqua.vue') },

        ]
    },

    {
        path: '/admin', component: Admin,  redirect: "/admin/dashboard",meta: { authOnly: true },
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

function isLoggedIn() {
    return localStorage.getItem("token");
  }

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!isLoggedIn()) {
        next({
          path: "/login",
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (isLoggedIn()) {
        next({
          path: "/admin",
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else {
      next(); // make sure to always call next()!
    }
  });

export default router;