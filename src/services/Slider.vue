<template>
  <carousel :autoplay="4000" :nav="true" :wrap-around="true">
    <slide v-for="slider in sliders" :key="slider.id">
      <img :src="'/sub/storage/app/'+slider.simage" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
// import {  Slide } from "vue3-carousel";
import Sliders from "../apis/Slider"
export default {
  data() {
    return {
      sliders: [],
      id:"",
      active_item: null,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },

  created() {
    this.getSliders();
  },

  methods:{
    getSliders(){
      Sliders.getSlider().then((response)=>{
        this.sliders = response.data;
        console.log(this.sliders);
      })
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  img {
    
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
  }
}
</style>

