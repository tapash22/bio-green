<template>
  <div class="row caros">
    <div class="col-md-12 car">
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
    </div>
    <div class="col-md-12 caro">
      <Carousel :items-to-show="1" :autoplay="4000" :wrap-around="true">
        <Slide v-for="slide in products" :key="slide.id">
          <router-link :to="slide.url">
            <div class="card">
              <img :src="slide.img" />

              <p>{{ slide.title }}</p>
            </div>
          </router-link>
        </Slide>
      </Carousel>
    </div>
  </div>
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
.row {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
.row .car {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 320px;
}
.row .car a {
  text-decoration: none;
}
.row .car a .card {
  width: 300px;
  height: 300px;
  padding: 10px;
  background: rgb(5, 19, 82);
}
.row .card img {
  width: 100%;
  height: 270px;
  background-position: center;
}
.row .card p {
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
.row .caro {
  display: none;
}

@media only screen and (max-width: 992px) {
  .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
   .row .car {
    display: none;
  }
  .row .caro {
    width: 100%;
    height: 250px;
    padding: 5px;
    margin: 0;
    display: block;
  }
  .row .caro a {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  .row .caro a .card {
    width: 90%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .row .caro a .card img {
    widows: 100%;
    height: 90%;
    padding: 0;
    margin: 0;
  }
   .row .caro a .card p {
    width: 100%;
    height: 10%;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
  }
}

@media only screen and (max-width: 436px) {
  .row {
    widows: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
  .row .car {
    display: none;
  }
  .row .caro {
    display: block;
    width: 100%;
    height: 300px;
    padding: 5px;
    margin: 0;
  }
 .row .caro a {
    padding: 0;
    margin:0;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
 .row .caro a .card {
    width: 100%;
    height: 290px;
    padding: 0;
    margin: 0;
  }
 .row .caro a .card img {
    widows: 100%;
    height: 85%;
    padding: 0;
    margin: 0;
  }
 .row .caro a .card p {
    width: 100%;
    height: 15%;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    color: #000;
  }
}
</style>