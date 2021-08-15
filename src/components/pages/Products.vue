<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h3
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Our Products
        </h3>
        <div class="col-md-4" v-for="product in products" :key="product.img">
          <div
            class="card"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-once="false"
          >
            <router-link :to="product.url">
              <div class="card-body">
                <div class="img">
                  <img :src="product.img" />
                </div>
              </div>
              <div class="card-footer">
                <p>{{ product.title }}</p>
              </div>
            </router-link>
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
          title: "Poultry",
          img: "https://i.postimg.cc/g0cHy9Z9/poltry.jpg",
          url: "/poultry",
        },
        {
          id: 2,
          title: "Ruminent",
          img: "https://i.postimg.cc/gk9ySLZH/runinent.jpg",
          url: "/ruminent",
        },
        {
          id: 3,
          title: "AQua",
          img: "https://i.postimg.cc/qMtYnKdc/aqua.jpg",
          url: "/aqua",
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
  margin-top: 122px;
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
  width: 300px;
  height: 100%;
}
.col-md-4 .card a {
  text-decoration: none;
}
.card-body {
  background: rgb(240, 237, 237);
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: 300px;
  padding: 5px;
}
.card-body .img {
  width: 100%;
  height: 100%;
  padding: 10px;
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
  .products {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: -50px;
}
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