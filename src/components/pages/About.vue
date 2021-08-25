<template>
  <div class="about">
    <div class="image">
      <img src="../../assets/image/about.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <h3>About us</h3>
        <div
          class="col-md-6 pt-5"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="false"
        >
          <img src="../../assets/image/sid.jpg" />
        </div>
        <div
          class="col-md-6 text"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="false"
        >
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
        <div class="col-md-6 text" data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="false">
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
        <div class="col-md-6 pt-5" data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="false">
          <img src="../../assets/image/sid.jpg" />
        </div>
      </div>
      <!-- <div class="row" data-aos="flip-up"
          data-aos-delay="500"
          data-aos-once="false">
        <h3>MEET OUR TEEM MEMBER</h3>
        <hr />
        <div
          class="col-md-12"
          style="width: 100%; height: 100%; margin-bottom: 50px"
        >
          <Teammember />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import Teammember from "../../services/Teammember.vue";
export default {
  components: {
    // Teammember,
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
  margin-top: 122px;
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
  color: green;
}
.col-md-12 {
  background: #fff;
  padding: 0;
  margin: 0;
}
.col-md-12 .row {
  background: #fff;
  padding-top: 50px;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 767px) {
  .about {
    margin-top: 100px;
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
}
</style>