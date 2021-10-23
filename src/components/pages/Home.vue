<template>
  <div class="home">
    <Slider />
    <div class="container">
      <div class="row blog my-3">
        <h3>products</h3>
        <p>We deliver performances rather just a product to your business</p>
        <div class="col-md-12">
          <Carousel />
        </div>
      </div>

      <!-- event -->
      <div class="row blog my-1">
        <h3>Events</h3>
        <div class="col-md-12" style="width: 100%; height: 100%">
          <EventList />
        </div>
      </div>

      <!-- blog -->
      <div class="row blog my-1">
        <h3>Blog</h3>
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
              <img :src="blog.data().image" />
            </div>
            <div class="card-body">
              <ul>
                <li style="">
                  {{ blog.data().title }}
                </li>
                <li>
                  <i class="fa fa-user" aria-hidden="true"></i>
                  {{ blog.data().author }}
                </li>
                <li>
                  <router-link
                    :to="{ name: 'BlogItem', params: { id: blog.id } }"
                    >Show Details</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../services/Slider.vue";
import Carousel from "../../services/Carousel.vue";
import EventList from "../../services/EventsList.vue";
import { db } from "../../firebase";

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
      blogs: [],
    };
  },
  created() {
    db.collection("blogs")
      .limit("3")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.blogs.push(doc);
        });
      });
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");
.home {
  margin-top: 120px;
}

.row {
  padding: 0;

  position: relative;
}
.row h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 0;
  text-transform: uppercase;
}

.row p {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #000;
  margin-top: -5px;
}
.row2 {
  margin-top: 30px;
  background: #fff;
  display: flex;
  margin-bottom: 18px;
}
.row2 .col-md-4 {
  padding: 10px;
}

/* blog */
.blog{
  width: 100%;
  height: 100%;
  padding:0;
  margin:0;
}
.blog .col-md-4 {
  width: 30%;
  margin: 10px;
}
.col-md-4 .card {
  width: 300px;
  height: 400px;
  padding: 0;
  margin: 5px;
  background: rgba(5, 19, 82, 0.671);
}
.col-md-4 .card .card-header {
  width: 100%;
  height: 220px;
  padding: 0;
  margin: 0;
}
.col-md-4 .card-header img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.col-md-4 .card-body {
  width: 100%;
  height: 180px;
  padding: 0;
  margin: 0;
  background: #ffa500;
}
.card-body ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 10px;
}
.card-body ul li {
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
  color: #000;
  list-style: none;
  margin: 0;
  padding: 5px;
}
.card-body ul li i {
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px;
  color: green;
}
.card-body ul li a {
  font-size: 1.3rem;
  font-weight: 500;
  color: rgb(5, 19, 82);
  cursor: pointer;
  text-align: justify;
  text-decoration: none;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 992px) {
  .home {
    width: 100%;
    height: 100%;
    margin-top: 80px;
    padding: 0;
  }
  .row {
    padding: 0;
    margin: 0;
    position: relative;
    margin-left: -5px;
  }
  .row h3 {
    text-align: left;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 0;
    text-transform: uppercase;
    margin-left: 80px;
  }
  .row h3 strong {
    color: rgba(12, 82, 15, 0.849);
    font-weight: 900;
    font-family: "Roboto", sans-serif;
  }
  .row p {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    color: #000;
    margin-top: -5px;
    margin-left: -40px;
    padding-left: 30px;
    padding-right: 30px;
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
.blog{
  width: 100%;
  height: 100%;
  padding:0;
  margin-left:5%;
}
.blog h3{
  margin-left: 35%;
}
  .blog .col-md-4 {
    width: 100%;
    height: 100%;
    margin: 10px;
    padding: 5px;
  }
  .col-md-4 .card {
    width: 80%;
    height: 100%;
    padding: 0;

    background: rgba(5, 19, 82, 0.671);
  }
  .col-md-4 .card .card-header {
    width: 100%;
    height: 200px;
    padding: 0;
    margin: 0;
  }
  .col-md-4 .card-header img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .col-md-4 .card-body {
    width: 100%;
    height: 200px;
    padding: 0;
    margin: 0;
    background: #ffa500;
  }
  .card-body ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  .card-body ul li {
    text-align: left;
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
    list-style: none;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
  }
  .card-body ul li i {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 5px;
  }
  .card-body ul li a {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(5, 19, 82);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
  }

}

@media only screen and (max-width: 767px) {
  .home {
    margin-top: 90px;
  }
  .row {
    padding: 0;
    margin: 0;
    position: relative;
    margin-left: -5px;
  }
  .row h3 {
    text-align: left;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 0;
    text-transform: uppercase;
    margin-left: 80px;
  }
  .row h3 strong {
    color: rgba(12, 82, 15, 0.849);
    font-weight: 900;
    font-family: "Roboto", sans-serif;
  }
  .row p {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    color: #000;
    margin-top: -5px;
    margin-left: -40px;
    padding-left: 30px;
    padding-right: 30px;
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
.blog{
  width: 100%;
  height: 100%;
  padding:0;
  margin-left:5%;
}
.blog h3{
  margin-left: 25%;
}
  .blog .col-md-4 {
    width: 100%;
    height: 100%;
    margin: 10px;
    padding: 5px;
  }
  .col-md-4 .card {
    width: 80%;
    height: 100%;
    padding: 0;

    background: rgba(5, 19, 82, 0.671);
  }
  .col-md-4 .card .card-header {
    width: 100%;
    height: 200px;
    padding: 0;
    margin: 0;
  }
  .col-md-4 .card-header img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .col-md-4 .card-body {
    width: 100%;
    height: 200px;
    padding: 0;
    margin: 0;
    background: #ffa500;
  }
  .card-body ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  .card-body ul li {
    text-align: left;
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
    list-style: none;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
  }
  .card-body ul li i {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 5px;
  }
  .card-body ul li a {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(5, 19, 82);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
  }

}
</style>