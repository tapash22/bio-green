<template>
  <div class="aqua">
    <div class="container">
      <div class="row">
        <h3>Aqua</h3>
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
          id: 1,
          title: "Enzymes",
          img: require("../assets/image/pd1.jpg"),
          url: "/enzymes_aqua",
        },
        {
          id: 2,
          title: "Essential Oil",
          img: require("../assets/image/pd2.jpg"),
          url: "/essentialoil_aqua",
        },
        {
          id: 3,
          title: "Postbiotic",
          img: require("../assets/image/pd4.jpg"),
          url: "/postbiotic_aqua",
        },
        {
          id: 4,
          title: "Organic Minerals",
          img: require("../assets/image/pd3.jpg"),
          url: "/organicminerals_aqua",
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
