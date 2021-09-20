<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h3>Probiotics</h3>
        <div
          class="col-md-4"
          v-for="product in products"
          :key="product.id"
        >
        <div class="card">
          <img :src="product.img" />
          <p>{{ product.title }}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
import { db } from '../firebase';

export default {
  data() {
    return {
      products:[],
    };
  },

    created() {
    db.collection("products").where("product_name", "==", "Prebioticsc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
        
<style scoped>
.products {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 120px;
}
.row {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  margin: 0;
}
.row h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
.row .col-md-4 {
  padding: 10px;
}
.col-md-4 .card {
  padding: 0;
  margin: 0;
  width: 280px;
  height: 100%;
  border: none;
}
.col-md-4 .card img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.col-md-4 .card p {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}

@media only screen and (max-width: 767px) {
  .products {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 100px;
  }
}
</style>