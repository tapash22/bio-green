<template>
  <div class="aqua">
    <div class="container">
      <div class="row">
          <h3>Poultry</h3>
        <div class="col-md-4 my-2" v-for="product in products" :key="product">
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
          url: "/enzymes",
        },
        {
          id: 2,
          title: "Essential Oil",
          img: require("../assets/image/pd2.jpg"),
          url: "/essensialoil",
        },
        {
          id: 3,
          title: "Feed Sanitizer",
          img: "https://i.postimg.cc/c4wdQL2j/f.jpg",
          url: "/feedsanitizer",
        },
        {
          id: 4,
          title: "Postbiotic",
          img: require("../assets/image/pd4.jpg"),
          url: "/postbiotic",
        },
        {
          id: 5,
          title: "Organic Minerals",
          img: require("../assets/image/pd3.jpg"),
          url: "/organicminarels",
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
.aqua {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 100px;
}
.row {
  padding: 5px;
  margin: 10px;
}
h3{
    font-size: 2.2rem;
    font-weight: 700;
    padding: 10px;
    color: #000;
    text-align: center;
    margin-top: 5px;
}
.col-me-4{
    width: 30%;
    padding: 10px;
    margin: 10px;
}
.col-me-4 .card{
    padding: 0;
    margin: 0;
    background: rgb(5, 19, 82);
    width: 100%;
    height: 100%;
}
.card .image{
    width: 100%;
    height: 80%;
}
.image img{
    width: 100%;
    height: 100%;
}
.card p{
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
}

@media only screen and (max-width: 767px) {
  .aqua {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 90px;
}
}
</style>