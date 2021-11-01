<template>
  <div class="blog">
    <div class="image">
      <img src="../../assets/image/blog.jpg" />
    </div>
    <h3>Blog</h3>
    <div class="container">
      <div
        class="row"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-once="false"
      >
        <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
          <div class="card">
            <div class="card-header">
              <img :src="blog.data().image" />
            </div>
            <div class="card-body">
              <ul>
                <li>
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
import { db } from "../../firebase";
export default {
  data() {
    return {
      showModal: false,
      blogs: [],
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
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 120px;
}
.image {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
.row {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0;
  margin: 0;
}
.col-md-4 {
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
.card .card-body {
  width: 100%;
  height: 150px;
  padding: 0;
  margin: 0;
}
.card .card-body ul {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffa500;
}
.card .card-body ul li {
  padding: 5px;
  margin: 0;
  width: 100%;
  height: 25%;
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
}
.card .card-body ul li:first-child {
  width: 100%;
  height: 50%;
  padding: 5px;
  margin: 0;
}
.card .card-body ul li i {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
}
.card .card-body ul li:last-child {
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 25%;
}
.card .card-body ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: #000;
}

@media only screen and (max-width: 992px) {
  .blog {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 90px;
  }
  .image {
    width: 100%;
    height: 300px;
    padding: 0;
    margin: 0;
  }
  .image img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  h3 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media only screen and (max-width: 436px) {
  .blog {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 90px;
  }
  .image {
    width: 100%;
    height: 300px;
    padding: 0;
    margin: 0;
  }
  .image img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  h3 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .blog .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
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
    padding:0;
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