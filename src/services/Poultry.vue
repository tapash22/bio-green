<template>
  <div class="aqua">
    <div class="container">
      <div class="row">
          <h3>Poultry</h3>
        <div class="col-md-4" v-for="product in products" :key="product">
          <div class="card">
            <router-link :to="product.url">
            <div class="image">
              <img :src="product.img" />
            </div>
            </router-link>
            <p>{{product.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

    mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
@import '../assets/css/catagory.css';
</style>