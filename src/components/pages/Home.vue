<template>
  <div class="home">
    <div class="slider">
      <Slider />
    </div>
    <div class="container">
      <div class="row">
        <h3>products</h3>
        <p>We deliver performances rather just a product to your business</p>
        <div class="col-md-12">
          <Carousel />
        </div>
      </div>
      <!-- event -->
      <div class="row">
        <h3>Events</h3>
        <div class="col-md-12">
          <EventList />
        </div>
      </div>

      <!-- blog -->
      <div class="row">
        <h3>Blog</h3>
        <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
          <div class="card">
            <div class="card-header">
              <img :src="'sub/storage/app'+blog.bimage" />
            </div>
            <div class="card-body">
              <ul>
                <li style="">
                  {{ blog.btitle }}
                </li>
                <li>
                  <i class="fa fa-user" aria-hidden="true"></i>
                  {{ blog.bauthor }}
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

import Blogs from "../../apis/Blog";


export default {
  components: {
    Slider,
    Carousel,
    EventList,
  },
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    this.getBlogs();
  },

  methods:{
    getBlogs(){
            Blogs.getBlog().then((response) => {
        this.blogs = response.data;
        console.log(this.blogs);
      });

    },

  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");
.home {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  margin-top: 120px;
}
 .slider {
  widows: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.301);
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.row p {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding: 0;
  margin-top: -10px;
}
.row .col-md-12 {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
}
 .col-md-12 .col-md-4 {
  width: 33%;
  padding: 20px;
  margin: 0;
}
.col-md-4 .card {
  width: 100%;
  height: 300px;
  padding: 2px;
  margin: 5px;
  background: #fff;
}
.col-md-4 .card .card-header {
  width: 100%;
  height: 150px;
  padding: 2px;
  margin: 0;
}
.col-md-4 .card .card-header img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-position: center;
  background-size: cover;
}
.col-md-4 .card .card-body {
  width: 100%;
  height: 150px;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-body ul {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffa500;
}
.col-md-4 .card .card-body ul li {
  padding: 5px;
  margin: 0;
  width: 100%;
  height: 25%;
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
}
.col-md-4 .card .card-body ul li:first-child {
  width: 100%;
  height: 50%;
  padding: 5px;
  margin: 0;
}
.col-md-4 .card .card-body ul li i {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
}
.col-md-4 .card .card-body ul li:last-child {
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 25%;
}
.col-md-4 .card .card-body ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #000;
}

@media only screen and (max-width: 992px) {
  .home {
    width: 100%;
    height: auto;
    margin-top: 90px;
    padding: 0;
  }
  .row {
    padding: 0;
    margin: 0;
    position: relative;
    margin-left: -5px;
  }
}

@media only screen and (max-width: 436px) {
  .home {
    width: 100%;
    height: 100%;
    margin-top: 90px;
    padding: 0;
  }
  .home .slider {
    widows: 100%;
    height: 330px;
    padding: 0;
    margin: 0;
    background: rgba(0, 0, 0, 0.301);
  }
  .home .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .row h3 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 5px;
    text-transform: uppercase;
  }
  .row p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding: 0;
    margin-top: -10px;
  }
  .row .col-md-12 {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 5px;
  }
  .row .col-md-4 {
    width: 90%;
    height: 100%;
    padding: 10px;
    margin: 0;
  }
  .col-md-4 .card {
    width: 100%;
    height: 300px;
    margin: 10px;
    padding: 2px;
    background: #fff;
  }
  .card .card-header {
    width: 100%;
    height: 60%;
    padding: 0;
    margin: 0;
  }
  .card .card-header img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .card .card-body {
    width: 100%;
    height: 40%;
    padding: 0;
    margin: 0;
    background: #fff;
  }
  .card .card-body ul {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .card .card-body ul li {
    width: 100%;
    height: 20%;
    padding: 2px;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
  .card .card-body ul li:first-child {
    width: 100%;
    height: 50%;
    padding: 2px;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .card .card-body ul li:last-child {
    width: 100%;
    height: 20%;
    padding: 2px;
    margin: 0;
  }
  .card .card-body ul li i {
    font-size: 1.1rem;
    padding: 2px;
  }
  .card .card-body ul li a {
    font-size: 1rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
}
</style>