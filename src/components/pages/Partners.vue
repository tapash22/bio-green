<template>
  <div class="partners">
        <div class="image">
      <img src="../../assets/image/partner.png" />
    </div>
      <div class="row">
        <h3>Partners</h3>
        <div
          class="col-md-12"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="false"
          v-for="partner in partners"
          :key="partner.id"
        >
          <div class="left">
           
            <img :src="partner.data().image" />
          
          </div>
          <div class="right">
            <p>
             <strong> Description:</strong>  {{partner.data().description}}
            </p>
            <a :href="partner.data().company_link">{{partner.data().company_site}}</a>
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
      partners: [],
      partner: {
        partner_name: "",
        company_site: "",
        company_link:"",
        description: "",
        image: "",
      },
      active_item: null,
    };
  },

  created() {
    db.collection("partners")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.partners.push(doc);
        });
      });
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.partners {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 120px;
}
.partners .image {
  min-height: 500px;
  padding: 0;
  margin: 0;
  background: #000;
}
.partners .image img {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
}

.row {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  margin-left: 130px;
  margin-right: 130px;
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
  padding: 10px;
  margin: 5px;
  width: 100%;
  height: 300px;
  display: flex;
   background:#ffa6006c;
}
.col-md-12 .left{
  width: 350px;
  height: 260px;
  padding: 10px;
}
.col-md-12 .left img{
  width: 100%;
  height: 100%;
  padding: 5px;
}
.col-md-12 .right{
  width: 60%;
  height: 260px;
  padding: 10px;
  margin-top: 20px;
}

.col-md-12 .right p{
  font-size: 1rem;
  font-weight: 500;
  color:#000;
  text-align: justify;
  align-items: center;
}
.col-md-12 .right p strong{
  font-size: 1.3rem;
  font-weight: 600;
  color: blue;
}
.col-md-12 .right a{
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
    margin-top: 80px;
    padding: 0;
  }
  .partners .image {
  min-height: 300px;
  padding: 0;
  margin: 0;
  background: #000;
}
.partners .image img {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
}

.row {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.row h3 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
.col-md-12 {
  padding: 10px;
  margin: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
   background:#ffa6006c;
}
.col-md-12 .left{
  width: 100%;
  height: 200px;
  padding: 10px;
}
.col-md-12 .left img{
  width: 100%;
  height: 100%;
  padding: 5px;
}
.col-md-12 .right{
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 0;
}

.col-md-12 .right p{
  font-size: 1rem;
  font-weight: 500;
  color:#000;
  text-align: justify;
  align-items: center;
}
.col-md-12 .right p strong{
  font-size: 1.3rem;
  font-weight: 600;
  color: blue;
}
.col-md-12 .right a{
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: blue;
  text-align: center;
  display: flex;
  justify-content: center;
}
}

@media only screen and (max-width: 767px) {
 .partners {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 90px;
}
.partners .image {
  min-height: 300px;
  padding: 0;
  margin: 0;
  background: #000;
}
.partners .image img {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
}

.row {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
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
.col-md-12 {
  padding: 10px;
  margin: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
   background:#ffa6006c;
}
.col-md-12 .left{
  width: 100%;
  height: 200px;
  padding: 10px;
}
.col-md-12 .left img{
  width: 100%;
  height: 100%;
  padding: 5px;
}
.col-md-12 .right{
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 0;
}

.col-md-12 .right p{
  font-size: 1rem;
  font-weight: 500;
  color:#000;
  text-align: justify;
  align-items: center;
}
.col-md-12 .right p strong{
  font-size: 1.3rem;
  font-weight: 600;
  color: blue;
}
.col-md-12 .right a{
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