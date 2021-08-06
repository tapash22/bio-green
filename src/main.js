import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";
import VueEasyLightbox from 'vue-easy-lightbox'




const app = createApp(App);
app.use(router);
app.use(VueEasyLightbox);
app.use(VueApexCharts);
app.mount('#app');
