<template>
  <Carousel
    :items-to-show="3"
    :autoplay="4000"
    :wrap-around="true"
    class="full"
  >
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
  <Carousel :items-to-show="1" :autoplay="4000" :wrap-around="true" class="res">
    <Slide v-for="slide in products" :key="slide.id">
      <router-link :to="slide.url">
        <div class="card">
          <img :src="slide.img" />

          <p>{{ slide.title }}</p>
        </div>
      </router-link>
    </Slide>
    <!-- <template #addons>
      <Navigation />
    </template> -->
  </Carousel>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Enzymes",
          img: require("../assets/image/pd1.jpg"),
          url: "/enzymes_poultry",
        },
        {
          id: 2,
          title: "Essential Oil",
          img: require("../assets/image/pd2.jpg"),
          url: "/essentialoil_poultry",
        },
        {
          id: 3,
          title: "Feed Sanitizer",
          img: "https://i.postimg.cc/c4wdQL2j/f.jpg",
          url: "/feedsanitizer_poultry",
        },
        {
          id: 4,
          title: "Postbiotic",
          img: require("../assets/image/pd4.jpg"),
          url: "/postbiotic_poultry",
        },
        {
          id: 5,
          title: "Organic Minerals",
          img: require("../assets/image/pd3.jpg"),
          url: "/organicminerals_poultry",
        },
      ],
    };
  },

  components: {
    Carousel,
    Slide,
    // Navigation,
  },
};
</script>
<style scoped>
.full {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
}
.res {
  display: none;
}
a {
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

@media only screen and (max-width: 992px) {
  .full {
    display: none;
  }
  .res {
    display: block;
    padding: 0;
    margin: 0;
    widows: 95%;
  }
  a {
    text-decoration: none;
  }
  .card {
    width: 100%;
    height: 300px;
    padding: 10px;
    background: rgb(5, 19, 82);
  }
  .card img {
    width: 100%;
    height: 250px;
    background-position: center;
  }
  .card p {
    height: 30px;
    font-size: 1rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #fff;
    text-align: center;
    z-index: 1;
    text-transform: uppercase;
    padding: 10px;
  }
}

@media only screen and (max-width: 436px) {
  .full {
    display: none;
  }
  .res {
    display: block;
    padding: 0;
    margin-left: -15px;
    widows: 95%;

  }
  .card {
    width: 350px;
    height: 250px;
    padding: 0;
    margin: 0;
    background: rgb(5, 19, 82);
  }
  .card img {
    width: 100%;
    height: 90%;
    background-position: center;
    padding: 0;
    margin: 0;
  }
  .card p {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #fff;
    text-align: center;
    margin-top: -3%;
    z-index: 1;
    text-transform: uppercase;
  }
}
</style>