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
              <img :src="blog.img" />
            </div>
            <div class="card-body">
              <ul>
                <li style="padding-left:10px;padding-right:10px;">{{ blog.text1 }}</li>
                <li style="padding-left:10px;padding-right:10px;">{{ blog.text }}</li>
                <li>
                  <button class="btn btn-primary" @click.prevent="onClick">
                    Read more
                  </button>
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
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Bio-green</h5>
          </div>
          <div class="modal-body">
            <div class="img">
              <img src="../../assets/image/blog.jpg" />
            </div>
            <div class="text">
              <h4>The way you treat the animals around</h4>
              <p>
                <i class="fa fa-user" aria-hidden="true"></i>Author name:
                Bio-green<br />
                <i class="fa fa-calendar" aria-hidden="true"></i>Publist Data:
                31-07-2021
              </p>

              <p class="wrap pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                tempora aliquid ipsum? Minus sequi sint magnam necessitatibus,
                aut debitis provident ab neque sit natus alias commodi vero rem
                ad velit.<br><br>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Nobis in similique delectus? Perspiciatis at facere soluta
                beatae nostrum molestiae. Officia tempore quam sapiente quos
                incidunt ex doloremque aspernatur libero sequi? <br><br>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quam facilis animi tempore minus illum tempora velit 
                necessitatibus maiores officiis, mollitia sapiente? Mollitia 
                dolor iure nisi repudiandae porro aut esse molestias.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                tempora aliquid ipsum? Minus sequi sint magnam necessitatibus,
                aut debitis provident ab neque sit natus alias commodi vero rem
                ad velit.<br><br>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Nobis in similique delectus? Perspiciatis at facere soluta
                beatae nostrum molestiae. Officia tempore quam sapiente quos
                incidunt ex doloremque aspernatur libero sequi? <br><br>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quam facilis animi tempore minus illum tempora velit 
                necessitatibus maiores officiis, mollitia sapiente? Mollitia 
                dolor iure nisi repudiandae porro aut esse molestias.
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
export default {
  data() {
    return {
      showModal: false,
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
        {
          id: "4",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/rwp9DmzX/gabor-szuts-m-KKRN7p2j-Os-unsplash.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "5",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/rwp9DmzX/gabor-szuts-m-KKRN7p2j-Os-unsplash.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "6",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/rwp9DmzX/gabor-szuts-m-KKRN7p2j-Os-unsplash.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    onClick() {
      this.showModal = true;
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
  margin-top: 170px;
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
  height: 100%;
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
  height: 100%;
  padding: 0;
  margin: 0;
  background:#fff;
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
  padding:0;
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
.modal .modal-body .text h4{
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