<template>
  <div class="blog">
    <div class="container">
      <div class="row">
        <h3>Blog</h3>
        <div class="col-md-8">
          <div class="text">
            <h4>The way you treat the animals around</h4>
            <p>-Author name: Bio-green</p>
            <p>-Publist Data: 31-07-2021</p>
          </div>
          <img src="../../assets/image/blog.jpg" />
          <p class="wrap pt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, est.
            Mollitia voluptatibus ut, fugiat quas distinctio consequatur
            doloribus magnam possimus perspiciatis quibusdam at dolore nam hic
            praesentium officiis fugit et! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum in enim sapiente sed maxime,
            architecto quibusdam labore? Delectus corporis, necessitatibus
            eligendi magnam saepe inventore, qui vero dignissimos amet deleniti
            omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati enim nisi deleniti fugiat dolore quasi. Vel quae nostrum
            magnam consequuntur quasi quod natus aperiam sapiente atque, earum
            et obcaecati sequi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur hic omnis recusandae facilis,
            suscipit, corporis cum amet numquam ducimus perspiciatis tempora in
            reprehenderit. Minus voluptatem corporis labore, libero a excepturi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eveniet dolor blanditiis modi quis excepturi unde, cumque quasi id,
            voluptatibus ut, neque in quae repellendus non facere aspernatur
            reiciendis dolore.
          </p>
        </div>
        <div class="col-md-4">
          <h2>Recent Posts</h2>
          <hr />
          <div class="card" v-for="blog in blogs" :key="blog.id">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: "1",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/pd1rK52N/blog.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "2",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/pd1rK52N/blog.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "3",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/pd1rK52N/blog.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "4",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/pd1rK52N/blog.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "5",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/pd1rK52N/blog.jpg",
          text1: "The way you treat the animals around",
          text: "author name",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae, voluptatibus dolorum quis reiciendis, alias autem earum doloribus cum repellat fugiat, quae nisi dignissimos mollitia architecto fuga itaque. Sequi, maxime.",
        },
        {
          id: "6",
          name: "The way you treat the animals around",
          img: "https://i.postimg.cc/pd1rK52N/blog.jpg",
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
};
</script>

<style scoped>
.blog {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 160px;
}
.row {
  display: flex;
  justify-content: space-around;
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
  padding-bottom: 10px;
}
.col-md-8 {
  width: 68%;
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
.col-md-8 .text {
  padding: 10px;
}
.col-md-8 .text.h4 {
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: center;
}
.col-md-8 .text p {
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: left;
}
.wrap {
  font-size: 1rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: left;
}
.col-md-4 {
  width: 30%;
  height: 100%;
  background: #fff;
}
.col-md-4 h2 {
  font-size: 1.8rem;
  font-weight: 500;
  color: #000;
}
.col-md-4 hr {
  width: 180px;
  height: 3px;
  color: black;
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
  color: #000;
  list-style: none;
}
.card-body ul li button {
  width: 100%;
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