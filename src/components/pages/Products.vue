<template>
  <div class="products">
    <div class="image">
      <img src="../../assets/image/p_page.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <h3
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
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
          title: "AQUA",
          img: require('../../assets/image/co.jpg'),
          url: "/prebioticsc",
        },
        {
          id: 3,
          title: "CATTLE",
          img: require('../../assets/image/fish.jpg'),
          url: "/essensialoilar",
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
  min-height: 400px;
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

.modal {
  display: block;
  z-index: 99;
  background: rgba(0, 0, 0, 0.562);
  padding-top: 5%;
}
.modal .modal-content {
  width: 800px;
  margin-left: -20%;
}
.modal .modal-header {
  background: rgba(22, 11, 117, 0.822);
  padding: 0;
  margin: 0;
  width: 800px;
  position: relative;
  display: flex;
  justify-content: right;
}
.modal .modal-header .close {
  margin-left: 97%;
  background: rgba(22, 11, 117, 0.822);
}
.modal .modal-header .close span {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
}
.modal .modal-body {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 800px;
  height: 300px;
}
.modal .modal-body .img {
  width: 40%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.modal .modal-body .img img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.modal .modal-body .text {
  width: 60%;
  height: 100%;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
.modal .modal-body .text h4 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  text-align: left;
  color: #000;
}
.modal .modal-body .text p {
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
}
.modal .modal-body .text p strong {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 5px;
  color: rgba(22, 11, 117, 0.822);
}
/* .modal .modal-body div .img {
  widows: 100%;
  height: 100%;
  background-position: center;
} */

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