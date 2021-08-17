<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h3>Organicminarels</h3>
        <div
          class="col-md-4"
          v-for="Organicminarel in Organicminarels"
          :key="Organicminarel.id"
        >
        <div class="card">
          <img :src="Organicminarel.img" />
          <p>{{ Organicminarel.title }}</p>
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
      Organicminarels: [
        {
          id: "1",
          title: "Organicminarels",
          img: "https://i.postimg.cc/hjrPq06h/organic.jpg",
        },
        {
          id: "2",
          title: "Organicminarels",
          img: "https://i.postimg.cc/hjrPq06h/organic.jpg",
        },
        {
          id: "3",
          title: "Organicminarels",
          img: "https://i.postimg.cc/hjrPq06h/organic.jpg",
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