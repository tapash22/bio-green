<template>
  <div class="blog">
    <div class="image">
      <img src="../../assets/image/blog.png" />
    </div>
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
                    >show details</router-link
                  >
                </li>
              </ul>
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
  height: 100%;
  margin-top: 0;
  padding: 0;
  margin-top: 120px;
  padding: 0;
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
  background-attachment: fixed;
}
.row {
  display: flex;
  padding: 0;
  margin-bottom: 50px;
 margin-left: 110px;
 margin-right: 110px;
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
  height: 100px;
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

@media only screen and (max-width: 767px) {
 .blog {
   position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 100px;
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
  background-attachment: fixed;
}
.row {
  display: flex;
  padding: 0;
  margin-bottom: 50px;
 margin-left: 10px;
 margin-right: 10px;
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
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.col-md-4 .card {
  width: 300px;
  height: 300px;
  padding: 0;
  margin: 5px;
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
  height: 100px;
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