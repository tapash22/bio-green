<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h3>Our Product</h3>
        <div class="col-md-4" v-for="product in products" :key="product.img">
          <div class="card" >
            <div class="card-body">
              <div class="img">
                <img :src="product.img" />
              </div>
            </div>
            <div class="card-footer">
              <p>{{product.text}}</p>
            </div>
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
          img: "https://i.postimg.cc/t405LSGv/ori.png",
          text: "Name of product",
        },
        {
          img: "https://i.postimg.cc/t405LSGv/ori.png",
          text: "Name of product",
        },
        {
          img: "https://i.postimg.cc/t405LSGv/ori.png",
          text: "Name of product",
        },
        {
          img: "https://i.postimg.cc/t405LSGv/ori.png",
          text: "Name of product",
        },
        {
          img: "https://i.postimg.cc/t405LSGv/ori.png",
          text: "Name of product",
        },
        {
          img: "https://i.postimg.cc/t405LSGv/ori.png",
          text: "Name of product",
        },
      ],
    };
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
  margin-top: 160px;
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
  width: 350px;
  height: 100%;
}
.card-body {
  background: rgb(240, 237, 237);
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: 400px;
  padding: 5px;
}
.card-body .img {
  width: 100%;
  height: 100%;
}
.img img {
  width: 100%;
  height: 100%;
  background-position: center;
}
.card-footer {
  padding: 5px;
  border: none;
  background: rgb(240, 237, 237);
  display: flex;
  flex-direction: column;
}
.card-footer p {
  text-align: center;
  padding: 5px;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
}
@media only screen and (max-width: 767px) {
  .row {
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    margin: 0;
  }
  .row h3 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 150px;
    padding-bottom: 10px;
  }
}
</style>