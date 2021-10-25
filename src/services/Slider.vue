<template>
  <carousel :autoplay="6000" :wrap-around="true">
    <slide v-for="slider in sliders" :key="slider.id">
      <img :src="slider.data().image" />
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
import { db } from "../firebase";
export default {
  data() {
    return {
      sliders: [],
      slider: {
        name: "",
        des: "",
        image: "",
      },
      active_item: null,
    };
  },
  components: {
    Carousel,
    Slide,

    Pagination,
  },

  created() {
    db.collection("sliders")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.sliders.push(doc);
        });
      });
  },
};
</script>

<style scoped>

.image {
  /* margin-top: -550px; */
  width: 100%;
  height: 100%;
  padding: 0;
  top: 0;
  z-index: 1;
  left: 0;
  right: 0;
}

img {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 767px) {
  .image {
    width: 415px;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
}
</style>

