<template>
  <div class="about">
    <div class="image">
      <img src="../../assets/image/about_h.jpg" />
    </div>
    <div class="container">
       <h3>About us</h3>
      <div class="row">
       
        <div
          class="col-md-6 pt-2"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="false"
        >
          <img src="../../assets/image/about.jpg" />
        </div>
        <div
          class="col-md-6"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="false"
        >
        <div class="text">
          <h4>WHAT WE DO</h4>
          <p >
            We are the sole importer & sourcing partner for world class
            additives for making feed for livestock & poultry with a focus to
            ensure safe human health, environment & nature on its turn. Since
            2016, our presence with quality, performance, reliability & best
            rate makes us trustworthy supplier in Bangladesh feed additive
            marketing & sourcing. Our objective is to distribute performance
            rather just products to your door. Quality products with enduring
            service & competitive rates we are always aware in protecting the
            clients interest. We believe in long term partnership &
            cooperative approach towards all clients, supplier & employees. Our
            core strengths lie on quality warehouse, rapid delivery,
            distribution efficiency, priorities to customer’s needs & evolving
            win-win solutions with clients. Our aspiration is to be
            professional, knowledge driven & reliable to be a trusted partner to
            your livestock & poultry business operation.
          </p>
        </div>
        </div>
      </div>
      <div class="row my-3 wrap" v-for="about in abouts" :key="about.text">
        <div class="col-md-3">
          <div class="title">
            <h2>{{about.text}}</h2>
          </div>
        </div>
        <div class="col-md-9">
          <div class="text1">
            <p>
              {{about.text1}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import Teammember from "../../services/Teammember.vue";
export default {
  data(){
    return{
      abouts:[
        { text:'The Mission',  text1:'Our holistic approach is to ensure best performing feed products at an affordable price. We view ourselves as partners with the feed producers, feed nutritionist, farmers, livestock professionals & all other customers.'},
         { text:'The Vission',text1:'Our Vission is to provied quality products, innovation and tecnical solution for poultry, fish and livestock'},
       
      ]
    };
  },

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
  margin-top: 0;
  padding: 0;
  /* background-image: url(../../assets/image/back.jpg); */
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.about .image {
  min-height: 500px;
  padding: 0;
  margin: 0;
  background: #000;
}
.about .image img {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
}
.about .container h3 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}

.about .row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  margin: 0;
}

.col-md-6 {
  /* background: #fff; */
  width: 50%;
  height: 435px;
  padding: 10px;
}
.col-md-6 img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.text {
  padding-left: 20px;
  background: #ffa6006c;
}
.text h4 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: center;
  padding: 5px;
}
.text p {
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
  color: #000;
   /* background:rgba(0, 0, 0, 0.2); */
}
.col-md-12 {
  background: #fff;
  padding: 0;
  margin: 0;
}
.col-md-12 .wrap {
  padding-top: 50px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  color: #000;
  background:#ffa6006c;
}
.wrap .col-md-3 {
  width: 30%;
  height: 100%;
  padding: 20px;
  margin: 0;
  /* background: rgba(5, 19, 82, 0.596); */
}
.wrap .col-md-3 .title {
  padding: 25px;
  margin: 0;

}

.col-md-3 .title h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  font-family: 'Oswald', sans-serif;
}
.col-md-9{
  width: 70%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.col-md-9 .text1{
  padding: 5px;
  margin: 10px;
}
.col-md-9 .text1 p{
  padding: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
}

@media only screen and (max-width: 767px) {
  .about {
    margin-top: 80px;
  }
  .about .row h3 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .col-md-6 {
    background: #fff;
    width: 100%;
    height: 300px;
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
  .col-md-12 .wrap {
  background: #fff;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.wrap .col-md-3 {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.wrap .col-md-3 .title {
  padding: 5px;
  margin: 0;
  background: #fff;
}
.col-md-3 .title h2 {
  font-size: 1.8rem;
  font-weight: 900;
  color: #000;
  font-family: 'Oswald', sans-serif;
  text-align: center;
}
.col-md-9{
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.col-md-9 .text1{
  padding: 5px;
  margin: 0;
}
.col-md-9 .text1 p{
  padding: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
}
}
</style>