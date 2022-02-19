<template>
  <div class="partners">
    <div class="image">
      <img src="../../assets/image/partner.png" />
    </div>
    <h3>Partners</h3>
    <div class="container">
      <div
        class="row"
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-once="false"
      >
        <div class="col-md-12" v-for="partner in partners" :key="partner.id">
          <div class="left">
            <img :src="'/sub/storage/app/'+partner.pimage" />
          </div>
          <div class="right">
            <p>
              {{ partner.pdescription }}
            </p>
            <a :href="partner.plink">{{
              partner.pname
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Partner from "../../apis/Partner";

export default {
  data() {
    return {
      partners: [],
      id:"",
      active_item: null,
    };
  },

  created() {
    this.getPartners();
  },

  methods:{
    getPartners(){
      Partner.getPartner().then((response)=>{
        this.partners = response.data;
        console.log(this.partners);
      })
    }
    
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.partners {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 120px;
}
.partners .image {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
  background: #000;
}
.partners .image img {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
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
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-12 {
  padding: 10px;
  margin: 5px;
  width: 100%;
  height: 300px;
  display: flex;
  background: #ffa6006c;
}
.col-md-12 .left {
  width: 350px;
  height: 260px;
  padding: 10px;
}
.col-md-12 .left img {
  width: 100%;
  height: 100%;
  padding: 5px;
}
.col-md-12 .right {
  width: 60%;
  height: 260px;
  padding: 10px;
  margin-top: 20px;
}

.col-md-12 .right p {
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  text-align: justify;
  align-items: center;
}
.col-md-12 .right p strong {
  font-size: 1.3rem;
  font-weight: 600;
  color: blue;
}
.col-md-12 .right a {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: blue;
  text-align: center;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 992px) {
  .partners {
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
    background: #000;
  }
  .image img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
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
  .col-md-12 {
    padding: 0;
    margin: 5px;
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #ffa6006c;
  }
  .col-md-12 .left {
    width: 100%;
    height: 200px;
    padding: 10px;
  }
  .col-md-12 .left img {
    width: 100%;
    height: 100%;
    padding: 5px;
  }
  .col-md-12 .right {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin-top: 0;
  }

  .col-md-12 .right p {
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    text-align: justify;
    align-items: center;
  }
  .col-md-12 .right p strong {
    font-size: 1.3rem;
    font-weight: 600;
    color: blue;
  }
  .col-md-12 .right a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    color: blue;
    text-align: center;
    display: flex;
    justify-content: center;
  }
}

@media only screen and (max-width: 436px) {
  .partners {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 90px;
  }
   .partners .image {
    width: 100%;
    height: 300px;
    padding: 0;
    margin: 0;
    background: #000;
  }
   .partners .image img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
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
  .col-md-12 {
    padding: 0;
    margin: 5px;
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #ffa6006c;
  }
  .col-md-12 .left {
    width: 100%;
    height: 200px;
    padding: 10px;
  }
  .col-md-12 .left img {
    width: 100%;
    height: 100%;
    padding: 5px;
  }
  .col-md-12 .right {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin-top: 0;
  }

  .col-md-12 .right p {
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    text-align: justify;
    align-items: center;
  }
  .col-md-12 .right p strong {
    font-size: 1.3rem;
    font-weight: 600;
    color: blue;
  }
  .col-md-12 .right a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    color: blue;
    text-align: center;
    display: flex;
    justify-content: center;
  }
}
</style>