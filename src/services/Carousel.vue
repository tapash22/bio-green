<template>
  <Carousel :items-to-show="3" :autoplay="4000" :wrap-around="true">
    <Slide v-for="slide in products" :key="slide.id">
      <router-link :to="slide.url">
        <div class="card">
          <img :src="slide.img" />

          <p>{{ slide.title }}</p>
        </div>
      </router-link>
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
          title: "Enzymes",
          img: "https://i.postimg.cc/wjkHGb6Q/en.jpg",
          url: "/enzymes",
        },
        {
          id: 2,
          title: "Essential Oil",
          img: "https://i.postimg.cc/DzZVYvp7/e.jpg",
          url: "/essensialoil",
        },
        {
          id: 3,
          title: "Feed Sanitizer",
          img: "https://i.postimg.cc/c4wdQL2j/f.jpg",
          url: "/feedsanitizer",
        },
        {
          id: 4,
          title: "Prebiotic",
          img: "https://i.postimg.cc/sD9tjQtV/p.jpg",
          url: "/probiotics",
        },
        {
          id: 5, 
          title: "Organic Minerals",
          img: "https://i.postimg.cc/hjrPq06h/organic.jpg",
          url: "/organicminarels",
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
a{
  text-decoration: none;
}
.card {
  width: 300px;
  height: 300px;
  padding: 10px;
  background: rgb(5, 19, 82);
}
.card img {
  width: 100%;
  height: 270px;
  background-position: center;
}
.card p {
  height: 30px;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #fff;
  text-align: center;
  z-index: 1;
  text-transform: uppercase;
  padding: 10px;
}

@media only screen and (max-width: 767px) {
  .card {
    width: 100%;
    height: 100px;
    padding: 0;
    background: #fff;
  }
  .card img {
    width: 100%;
    height: 100%;
    background-position: center;
  }
  .card p {
    font-size: 1rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #fff;
    text-align: center;
    margin-top: -20%;
    z-index: 1;
    text-transform: uppercase;
  }
}
</style>