<template>
  <div class="partners">
        <div class="image">
      <img src="../../assets/image/partner.jpg" />
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
            <a :href="partner.data().product_link">
            <img :src="partner.data().image" />
            </a>
          </div>
          <div class="right">
            <h4>Partner Name: {{partner.data().partner_name}}</h4>
            <ul>
              <li>Country Name: {{partner.data().country_name}}</li>
              <li>Product List: {{partner.data().product_list}}</li>
            </ul>
            <p>
              Description: {{partner.data().description}}
            </p>
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
        country_name: "",
        product_list: "",
        product_link:"",
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
  min-height: 700px;
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
  height: 700px;
}

.row {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  margin-left: 100px;
  margin-right: 100px;
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
  height: 280px;
  display: flex;
   background:#ffa6006c;
}
.col-md-12 .left{
  width: 40%;
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
}
.col-md-12 .right h4{
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 5px;
  text-transform: uppercase;
}
.col-md-12 .right ul{
  padding: 5px;
  margin: 0;
  display: block;
}
.col-md-12 .right ul li{
  list-style: none;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  color: #000;
}

.col-md-12 .right p{
  font-size: 1rem;
  font-weight: 500;
  color:#000;
  text-align: justify;
}

@media only screen and (max-width: 767px) {
 .partners {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 120px;
}

.row {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  margin-left: 100px;
  margin-right: 100px;
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
  height: 280px;
  display: flex;
   background:#ffa6006c;
}
.col-md-12 .left{
  width: 40%;
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
}
.col-md-12 .right h4{
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 5px;
  text-transform: uppercase;
}
.col-md-12 .right ul{
  padding: 5px;
  margin: 0;
  display: block;
}
.col-md-12 .right ul li{
  list-style: none;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  color: #000;
}

.col-md-12 .right p{
  font-size: 1rem;
  font-weight: 500;
  color:#000;
  text-align: justify;
}
}
</style>