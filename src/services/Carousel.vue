<template>
  <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in products" :key="slide.id">
      <div class="card">
        <img :src="slide.img" />
        <p>{{ slide.url }}</p>
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
          img: "https://i.postimg.cc/3ryHCSbC/a.jpg",
          url: "poultry",
        },
        {
          id: 2,
          title: "Ruminent",
          img: "https://i.postimg.cc/BvZr8MKF/b.jpg",
          url: "ruminent",
        },
        {
          id: 3,
          title: "AQua",
          img: "https://i.postimg.cc/JhyQdXwg/c.jpg",
          url: "aqua",
        },
        {
          id: 4,
          title: "Pet-Animal",
          img: "https://i.postimg.cc/8cbdrBWF/d.jpg",
          url: "petanimal",
        },
        {
          id: 5,
          title: "Vet Clinic",
          img: "https://i.postimg.cc/pX2JM4bK/e.jpg",
          url: "vetClinic",
        },
        {
          id: 6,
          title: "Others",
          img: "https://i.postimg.cc/NjF85X0M/f.jpg",
          url: "others",
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
  height: 200px;
  padding: 0;
  background: blue;
}
.card img{
  width: 100%;
  height: 100%;
  background-position: center;
}
.card p{
  font-size: 2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color:#fff;
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