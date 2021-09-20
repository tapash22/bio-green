<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h3>Feedsanitizer</h3>
        <div class="col-md-4" v-for="product in products" :key="product">
          <div class="card">
            <img :src="product.image" />
            <div class="btn">
              <div>view</div>
              <div>
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="name">
              <p>{{ product.product_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      products: [],
    };
  },

  created() {
    db.collection("products")
      .where("product_name", "==", "Essensialoila")
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
.col-md-4 .card .btn {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 90px;
  right: -50px;
  width: 120px;
  height: 40px;
  background: #1ebbf0;
  border-radius: 20%/50%;
  padding: 0;
}
.col-md-4 .card .btn div {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 4px;
}
.col-md-4 .card .btn div i {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
}
/* .col-md-4 .card .btn div i:hover {
  transform: translateX(0);
} */
.col-md-4 .card .name {
  position: relative;
  padding: 10px;
}
.col-md-4 .card .name p {
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