<template>
  <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in products" :key="slide.id">
       
      <div class="card">
        <router-link :to="slide.url">
        <img :src="slide.img" />
        </router-link>
        <p>{{ slide.title }}</p>
      </div>
       
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Poultry",
          img: "https://i.postimg.cc/g0cHy9Z9/poltry.jpg",
          url: "/poultry",
        },
        {
          id: 2,
          title: "Ruminent",
          img: "https://i.postimg.cc/gk9ySLZH/runinent.jpg",
          url: "/ruminent",
        },
        {
          id: 3,
          title: "AQua",
          img: "https://i.postimg.cc/YC7JZQXN/zhengtao-tang-V7-SKRh-Xskv8-unsplash.jpg",
          url: "/aqua",
        },
        {
          id: 4,
          title: "Ruminent",
          img: "https://i.postimg.cc/gk9ySLZH/runinent.jpg",
          url: "/ruminent",
        },
         {
          id: 5,
          title: "AQua",
          img: "https://i.postimg.cc/YC7JZQXN/zhengtao-tang-V7-SKRh-Xskv8-unsplash.jpg",
          url: "/aqua",
        },
        {
          id: 6,
          title: "Poultry",
          img: "https://i.postimg.cc/g0cHy9Z9/poltry.jpg",
          url: "/poultry",
        },
      ],
    };
  },

  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>
<style scoped>
.card {
  width: 300px;
  height: 300px;
  padding: 0;
  background: blue;
  border: 2px solid green;
}
.card img{
  width: 100%;
  height: 300px;
  background-position: center;
}
.card p{
  height:50px;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color:#000;
  text-align: center;
  margin-top: -20%;
  z-index: 1;
  text-transform: uppercase;
}

@media only screen and (max-width: 767px) {
  .card {
  width: 100%;
  height: 200px;
  padding: 0;
  background: #fff;
}
.card img{
  width: 100%;
  height: 100%;
  background-position: center;
}
.card p{
  font-size: 1rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color:#fff;
  text-align: center;
  margin-top: -20%;
  z-index: 1;
  text-transform: uppercase;
}

}
</style>