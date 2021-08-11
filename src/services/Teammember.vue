<template>
  <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true">
    <Slide v-for="member in members" :key="member.img">
      <div class="card">
        <div class="card-header">
          <div class="image">
            <img :src="member.img" />
          </div>
        </div>
        <div class="card-body">
          <ul>
            <li>{{ member.name }}</li>
            <li>{{ member.text }}</li>
          </ul>
        </div>
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
      members: [
        {
          img: "https://i.postimg.cc/wTGshrF4/1.jpg",
          name: "Name",
          text: "Desicnation",
        },
        {
          img: "https://i.postimg.cc/wTGshrF4/1.jpg",
          name: "Name",
          text: "Desicnation",
        },
        {
          img: "https://i.postimg.cc/wTGshrF4/1.jpg",
          name: "Name",
          text: "Desicnation",
        },
        {
          img: "https://i.postimg.cc/wTGshrF4/1.jpg",
          name: "Name",
          text: "Desicnation",
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
  height: 280px;
  padding: 0;
}
.card .card-header {
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  background: #fff;
   border: 5px solid green;
}
.card-header .image {
  width: 100%;
  height: 200px;
  padding: 5px;
  background: black;
}
.card-header .image img {
  width: 100%;
  height: 100%;
  background-position: center;
}
.card-body {
  height: 50px;
  border: none;
  background: green;
  padding: 0;
}
.card-body ul {
  display: flex;
  flex-direction: column;
  padding: 0;
}
ul li {
  list-style: none;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color:#fff;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
}

@media only screen and (max-width: 767px) {

}
</style>