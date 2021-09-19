<template>
  <div class="home">
    <Slider />
    <div class="container">
      <div class="row blog my-3">
        <h3>Our<strong> products </strong></h3>
        <p>We deliver performances rather just a product to your business</p>
        <div class="col-md-12" >
          <Carousel />
        </div>
      </div>

      <!-- event -->
      <div class="row blog my-3">
        <h3>Event <strong>List</strong></h3>
        <div class="col-md-12" style="width: 100%; height: 100%">
          <EventList />
        </div>
      </div>

      <!-- blog -->
      <div class="row blog my-3">
        <h3>Bio-Green <strong>Blog</strong></h3>
        <div
          class="col-md-4"
          v-for="blog in blogs"
          :key="blog.id"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="false"
        >
          <div class="card">
            <div class="card-header">
              <img :src="blog.img" />
            </div>
            <div class="card-body">
              <ul>
                <li>{{ blog.text1 }}</li>
                <li>{{ blog.text }}</li>
                <li><button class="btn btn-primary">Read more</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- about -->
    <!-- <div class="about">
      <h3>Our <strong> Plan</strong></h3>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="about in abouts" :key="about.id">
            <div
              class="round"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-once="false"
            >
              <p>{{ about.text }}</p>
            </div>
            <div
              class="box"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p>{{ about.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Slider from "../../services/Slider.vue";
import Carousel from "../../services/Carousel.vue";
import EventList from "../../services/EventsList.vue";

export default {
  components: {
    Slider,
    Carousel,
    EventList,
  },
  data() {
    return {
      occations: [],
      occation: {
        name: "",
        place: "",
        image: "",
      },

      blogs: [
        {
          id: "1",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/9XGbSKsS/pawel-czerwinski-qlno-Ayck9-Zc-unsplash.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "2",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/9FCbj1hf/david-clode-Jd-Nixbs-Lw-S8-unsplash.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "3",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/rwp9DmzX/gabor-szuts-m-KKRN7p2j-Os-unsplash.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
      ],

      abouts: [
        {
          id: "1",
          name: "We deliver performances rather just a product to your business We deliver performances rather just a product to your business ",
          text: "A",
        },
        {
          id: "2",
          name: "We deliver performances rather just a product to your businessWe deliver performances rather just a product to your business",
          text: "B",
        },
        {
          id: "3",
          name: "We deliver performances rather just a product to your business We deliver performances rather just a product to your business",
          text: "C",
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
.home {
  margin-top: 130px;
}

.row {
  padding: 0;
  margin: 0;
  position: relative;
}
.row h3 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
font-family: 'Roboto', sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 0;
  text-transform: uppercase;
}
.row h3 strong{
  color:  rgba(31, 15, 105, 0.849);
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
}
.row p {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #000;
  margin-top: -5px;
}
.row2 {
  margin-top: 30px;
  background: #fff;
  display: flex;
  margin-bottom: 20px;
}
.row2 .col-md-4 {
  padding: 10px;
}

/* blog */
.blog {
  background: #fff;
  padding: 30px;
}
.blog .col-md-4 .card {
  width: 300px;
  height: 100%;
  padding: 0;
  margin: 5px;
  background: #fff;
}
.blog .col-md-4 .card .card-header {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
}
.blog .col-md-4 .card-header img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.blog .col-md-4 .card-body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.blog .card-body ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.blog .card-body ul li {
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  list-style: none;
}
.blog .card-body ul li button {
  width: 100%;
  margin-top: 5px;
}

/* about */
.about {
  width: 100%;
  height: 400px;
  background-image: url("../../assets/image/about_h.jpg");
  background-position: center;
  background-size: cover;
  margin-top: 20px;
  margin-bottom: 20px;
}
.about h3 {
  padding: 20px;
  color: #fff;
}
.about .row {
  display: flex;
  justify-content: center;
  padding: 0;
}
.about .col-md-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0;
}
.about .col-md-4 .round {
  display: block;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(117, 10, 103, 0.699);
  margin-left: 45%;
}
.about .col-md-4 .round p {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
}
.about .col-md-4 .box {
  padding: 0;
  margin: 10px;
  width: 350px;
  border-radius: 10%;
  background: rgba(14, 13, 13, 0.397);
}
.about .col-md-4 .box p {
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  text-align: center;
}

@media only screen and (max-width: 767px) {
 .home {
  margin-top: 80px;
}

.row {
  padding: 0;
  margin: 0;
  position: relative;
}
.row h3 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
font-family: 'Roboto', sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 0;
  text-transform: uppercase;
}
.row h3 strong{
  color:  rgba(12, 82, 15, 0.849);
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
}
.row p {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #000;
  margin-top: -5px;
}
.row2 {
  margin-top: 30px;
  background: #fff;
  display: flex;
  margin-bottom: 20px;
}
.row2 .col-md-4 {
  padding: 10px;
}

/* blog */
.blog {
  background: #fff;
  padding: 30px;
}
.blog .col-md-4 .card {
  width: 300px;
  height: 100%;
  padding: 0;
  margin: 5px;
  background: #fff;
}
.blog .col-md-4 .card .card-header {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
}
.blog .col-md-4 .card-header img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.blog .col-md-4 .card-body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.blog .card-body ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.blog .card-body ul li {
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  list-style: none;
}
.blog .card-body ul li button {
  width: 100%;
  margin-top: 5px;
}

/* about */
.about {
  width: 100%;
  height: 400px;
  background-image: url("../../assets/image/about_h.jpg");
  background-position: center;
  background-size: cover;
  margin-top: 20px;
  margin-bottom: 20px;
}
.about h3 {
  padding: 20px;
  color: #fff;
}
.about .row {
  display: flex;
  justify-content: center;
  padding: 0;
}
.about .col-md-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0;
}
.about .col-md-4 .round {
  display: block;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(117, 10, 103, 0.699);
  margin-left: 45%;
}
.about .col-md-4 .round p {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
}
.about .col-md-4 .box {
  padding: 0;
  margin: 10px;
  width: 350px;
  border-radius: 10%;
  background: rgba(14, 13, 13, 0.397);
}
.about .col-md-4 .box p {
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  text-align: center;
}
}
</style>