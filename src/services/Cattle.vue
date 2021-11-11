<template>
  <div class="aqua">
    <div class="container">
      <div class="row">
        <h3>Cattle</h3>
        <div class="col-md-4 my-2" v-for="product in products" :key="product">
          <div class="card">
            <router-link :to="product.url">
              <div class="image">
                <img :src="product.img" />
              </div>
            </router-link>
            <p>{{ product.title }}</p>
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
          id: 4,
          title: "Postbiotic",
          img: require("../assets/image/pd4.jpg"),
          url: "/postbiotic_cattle",
        },
        {
          id: 5,
          title: "Organic Minerals",
          img: require("../assets/image/pd3.jpg"),
          url: "/organicminerals_cattle",
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