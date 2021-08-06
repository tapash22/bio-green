<template>
  <div class="about">
    <div class="image">
      <img src="../../assets/image/about.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <h3>About us</h3>
        <div class="col-md-6 pt-5">
          <img src="../../assets/image/sid.jpg" />
        </div>
        <div class="col-md-6 text">
          <h4>WHAT WE DO</h4>
          <p class="wrap">
            We are the sole importer & sourcing partner for world class
            additives for making feed for livestock & poultry with a focus to
            ensure safe human health, environment & nature on its turn. Since
            2016, our presence with Quality, performance, reliability & best
            rate makes us trustworthy supplier in Bangladesh feed additive
            marketing & source. Our objective is to distribute performance
            rather just products to your door. Quality products with enduring
            service & competitive rates we are always aware in protecting the
            clients interests. We believe in long term partnerships &
            cooperative approach towards all clients, supplier & employees. Our
            core strengths lie on quality warehouse, rapid delivery,
            distribution efficiency, priorities to customer’s needs & evolving
            win-win solutions with clients. Our aspiration is to be
            professional, knowledge driven & reliable to be a trusted partner to
            your livestock & poultry business operation.
          </p>
        </div>
        <div class="col-md-6 text">
          <h4>WHAT WE DO</h4>
          <p class="wrap">
            We are the sole importer & sourcing partner for world class
            additives for making feed for livestock & poultry with a focus to
            ensure safe human health, environment & nature on its turn. Since
            2016, our presence with Quality, performance, reliability & best
            rate makes us trustworthy supplier in Bangladesh feed additive
            marketing & source. Our objective is to distribute performance
            rather just products to your door. Quality products with enduring
            service & competitive rates we are always aware in protecting the
            clients interests. We believe in long term partnerships &
            cooperative approach towards all clients, supplier & employees. Our
            core strengths lie on quality warehouse, rapid delivery,
            distribution efficiency, priorities to customer’s needs & evolving
            win-win solutions with clients. Our aspiration is to be
            professional, knowledge driven & reliable to be a trusted partner to
            your livestock & poultry business operation.
          </p>
        </div>
        <div class="col-md-6 pt-5">
          <img src="../../assets/image/sid.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h3>MEET OUR TEEM MEMBER</h3>
          <hr />
          <div class="row">
            <div class="col-md-3" v-for="member in members" :key="member.img">
              <div class="card">
                <div class="card-header">
                  <div class="image">
                    <img :src="member.img" />
                  </div>
                </div>
                <div class="card-body">
                  <ul>
                    <li>{{ member.name }}</li>
                    <li>{{ member.text }}</li>
                  </ul>
                </div>
              </div>
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
      members: [
        {
          img: "https://i.postimg.cc/wTGshrF4/1.jpg",
          name: "Name",
          text: "Desicnation",
        },
        {
          img: "https://i.postimg.cc/wTGshrF4/1.jpg",
          name: "Name",
          text: "Desicnation",
        },
        {
          img: "https://i.postimg.cc/wTGshrF4/1.jpg",
          name: "Name",
          text: "Desicnation",
        },
        {
          img: "https://i.postimg.cc/wTGshrF4/1.jpg",
          name: "Name",
          text: "Desicnation",
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
.about {
  width: 100%;
  height: 100%;
  margin-top: 160px;
  padding: 0;
}
.image {
  width: 100%;
  height: 300px;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.about .row {
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}
.about .row h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
.col-md-6 {
  background: #fff;
  width: 50%;
  height: 450px;
  padding: 5px;
}
.col-md-6 img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.text {
  padding-left: 20px;
  margin-top: 30px;
}
.text h4 {
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: center;
}
.text p {
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
}
.col-md-12 {
  background: #fff;
  padding: 10px;
}
.col-md-12 h3 {
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  font-family: "MonteCarlo", cursive;
}
hr {
  height: 2px;
  color: #000;
}
.col-md-12 {
  background: #fff;
  padding: 0;
  margin: 0;
}
.col-md-12 .row {
  background: #fff;
  padding-top: 50px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
}
.col-md-12 .row .col-md-3 {
  padding: 30px;
}
.col-md-12 .row .col-md-3 .card {
  width: 200px;
}
.card .card-header {
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
  background: #fff;
}
.card-header .image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid green;
  padding: 2px;
  background: yellow;
  margin-top: -10%;
}
.card-header .image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-position: center;
}
.card-body {
  border: none;
  background: #fff;
  padding: 10px;
}
.card-body ul {
  display: flex;
  flex-direction: column;
}
ul li {
  list-style: none;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
}

@media only screen and (max-width: 767px) {
  .about {
    margin-top: 300px;
  }
  .about .row h3 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .col-md-6 {
    background: #fff;
    width: 100%;
    height: 450px;
    padding: 5px;
  }
  .col-md-6 img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .text {
    padding-left: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    height: 100%;
  }
  .text h4 {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #000;
    text-align: center;
  }
  .text p {
    font-size: 16px;
    font-weight: 500;
    padding: 5px;
  }
  .col-md-12 {
    background: #fff;
    padding: 0;
    margin: 0;
  }
  .col-md-12 .row {
    background: #fff;
    padding-top: 50px;
    padding-bottom: 30px;
    padding: 0;
    margin: 0;
  }
  .col-md-12 .row .col-md-3 {
    padding: 20px;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .col-md-12 .row .col-md-3 .card {
    width: 200px;
  }
  .card .card-header {
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;
    border: none;
    background: #fff;
  }
  .card-header .image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid green;
    padding: 2px;
    background: yellow;
    margin-top: -10%;
  }
  .card-header .image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-position: center;
  }
  .card-body {
    border: none;
    background: #fff;
    padding: 10px;
  }
  .card-body ul {
    display: flex;
    flex-direction: column;
  }
  ul li {
    list-style: none;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
}
</style>