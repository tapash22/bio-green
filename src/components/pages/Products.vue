<template>
  <div class="products">
    <div class="image">
      <img src="../../assets/image/product.png" />
    </div>
    <div class="container">
      <div class="row">
        <h3>
          Products
        </h3>
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div
            class="card"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-once="false"
          >
            <div class="card-body">
              <a :href="product.url">
                <div class="img">
                  <img :src="product.img" />
                </div>
              </a>
            </div>
            <div class="card-footer">
              <p>{{ product.title }}</p>
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
          id: 1,
          title: "POULTRY",
          img: require('../../assets/image/po.jpg'),
          url: "/enzymes",
        },
         {
          id: 2,
          title: "CATTLE",
          img: require('../../assets/image/co.jpg'),
          url: "/essensialoilar",
        },
        {
          id: 3,
          title: "AQUA",
          img: require('../../assets/image/fish.jpg'),
          url: "/prebioticsc",
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
  margin-top: 120px;
}
.image {
  width: 100%;
  height: 500px;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
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
  text-transform: uppercase;
}
.row .col-md-4 {
  padding: 10px;
  display: flex;
  justify-content: center;
}
.col-md-4 .card {
  padding: 0;
  margin: 0;
  width: 300px;
  height: 300px;
  background: #ffa6006c;
}
.col-md-4 .card a {
  text-decoration: none;
}
.card-body {
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: 270px;
  padding: 0;
  margin: 0;
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
  padding: 0;
  margin: 0;
  border: none;
    background: rgb(5, 19, 82);
  display: flex;
  flex-direction: column;
}
.card-footer p {
  text-align: center;
  padding: 0;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
}
 
@media only screen and (max-width: 767px) {
 .products {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 100px;
}
.image {
  width: 100%;
  height: 300px;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
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
  text-transform: uppercase;
}
.row .col-md-4 {
  padding: 10px;
}
.col-md-4 .card {
  padding: 0;
  margin: 0;
  width: 300px;
  height: 300px;
  background: #ffa6006c;
}
.col-md-4 .card a {
  text-decoration: none;
}
.card-body {
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: 270px;
  padding: 0;
  margin: 0;
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
  padding: 0;
  margin: 0;
  border: none;
    background: rgb(5, 19, 82);
  display: flex;
  flex-direction: column;
}
.card-footer p {
  text-align: center;
  padding: 0;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
}
}
</style>