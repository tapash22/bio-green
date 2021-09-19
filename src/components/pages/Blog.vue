<template>
  <div class="blog">
    <div class="container">
      <div class="row">
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
                <li style="padding-left: 10px; padding-right: 10px">
                  
                  {{ blog.data().title }}
                </li>
                <li style="padding-left: 10px; padding-right: 10px">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  {{ blog.data().author }}
                </li>
                <li>
                  <router-link :to="{ name: 'BlogItem', params: { id: blog.id } }">show details</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!-- <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Bio-green</h5>
          </div> -->
          <div class="modal-body">
            <div class="img">
              <img :src="blog.image" />
            </div>
            <div class="text">
              <h4>{{ blog.title }}</h4>
              <p>
                <i class="fa fa-user" aria-hidden="true"></i>Author name:
                {{ blog.author }}<br />
                <!-- <i class="fa fa-calendar" aria-hidden="true"></i>Publist Data:
                31-07-2021 -->
              </p>
              <p>
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                {{ blog.mydate}}
              </p>

              <p class="wrap pt-3">
                {{ blog.description }}
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="inClose()">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  data() {
    return {
      showModal: false,
      blogs: [],
      // blog: {
      //   title: "",
      //   author: "",
      //   mydate:"",
      //   description: "",
      //   image: "",
      // },
      active_item: null,
    };
  },

  created() {
    db.collection("blogs")
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

  methods: {
    onClick(blog) {
      this.showModal = true;
      this.blog = blog.data();
      this.active_item = blog.id;
    },
    inClose() {
      this.showModal = false;
    },
  },

};
</script>

<style scoped>
.blog {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 142px;
}
.row {
  display: flex;
  padding: 0;
  margin-bottom: 50px;
  width: 100%;
  background: #fff;
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
.col-md-4 {
  width: 30%;
  margin: 10px;
}

.col-md-4 .card {
  width: 300px;
  height: 300px;
  padding: 0;
  margin: 5px;
  background: #fff;
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
  height: 100px;
  padding: 0;
  margin: 0;
  background: #fff;
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
  padding: 0;
  margin: 0;
}
.card-body ul li button {
  width: 100%;
}
.modal {
  display: block;
  z-index: 99;
  background: rgba(0, 0, 0, 0.562);
}
.modal .modal-header {
  background: rgba(22, 11, 117, 0.822);
  padding: 0;
  margin: 0;
}
.modal .modal-header .modal-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
}
.modal .modal-body {
  padding: 0;
  margin: 0;
}
.modal .modal-body .img {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  border: 3px solid rgba(22, 11, 117, 0.822);
}
.modal .modal-body .img img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.modal .modal-body .text {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;
}
.modal .modal-body .text h4 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
}
.modal .modal-body .text p {
  font-size: 1rem;
  font-weight: 500;
}
.modal .modal-body .text p i {
  font-size: 1.7rem;
  font-weight: 700;
  padding: 10px;
  color: rgba(22, 11, 117, 0.822);
}
.modal .modal-body div .img {
  widows: 100%;
  height: 100%;
  background-position: center;
}

@media only screen and (max-width: 767px) {
  .blog {
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
  .col-md-8 {
    width: 100%;
    height: 100%;
    background: #fff;
    margin: 5px;
  }
  .col-md-8 img {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
  }
  .col-md-4 {
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .col-md-4 h2 {
    font-size: 1.8rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #000;
    text-align: center;
  }
  .col-md-4 hr {
    width: 180px;
    height: 3px;
    color: black;
    position: relative;
    display: flex;
    margin-left: 25%;
  }
  .col-md-4 .card {
    width: 300px;
    height: 100%;
    padding: 0;
    margin: 5px;
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
    height: 100%;
    padding: 0;
    margin: 0;
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
    font-family: "Oswald", sans-serif;
    color: #000;
    list-style: none;
  }
  .card-body ul li button {
    width: 100%;
  }
}
</style>