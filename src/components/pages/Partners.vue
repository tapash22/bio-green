<template>
  <div class="partners">
    <!-- <div class="image">
      <img src="../../assets/image/partners.png" />
    </div> -->
    <div class="container">
      <div class="row">
        <h3>Our Partners</h3>
        <div
          class="col-md-6"
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
            <h4>{{partner.data().partner_name}}</h4>
            <ul>
              <li>{{partner.data().country_name}}</li>
              <li>{{partner.data().product_list}}</li>
            </ul>
            <p>
              {{partner.data().description}}
            </p>
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
  margin-top: 130px;
}
.image {
  min-height: 500px;
  background: linear-gradient(#e66465, #9198e5);
  display: flex;
  justify-content: center;
}
.image img {
  width: 600px;
  margin-top: 180px;
  height: 300px;
  background-position: center;
  background-size: cover;
}
.row {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
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
.col-md-6 {
  padding: 0;
  margin: 10px;
  width: 500px;
  height: 100%;
  display: flex;
  border: 1px solid green;
}
.col-md-6 .left {
  width: 300px;
  height: 300px;
  padding: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fff;
}
.left img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  padding:10px;
}
.right {
  width: 200px;
  height: 300px;
  padding: 0;
  margin: 0;
  background: black;
}
.right h4 {
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding: 5px;
}
.right ul {
  display: block;
  padding: 0;
  margin: 0;
  background: rgb(2, 17, 59);
}
.right ul li {
  list-style: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}
.right p {
  padding: 5px;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
}

@media only screen and (max-width: 767px) {
 .partners {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.image {
  min-height: 500px;
  background: linear-gradient(#e66465, #9198e5);
  display: flex;
  justify-content: center;
}
.image img {
  width: 600px;
  margin-top: 180px;
  height: 300px;
  background-position: center;
  background-size: cover;
}
.row {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  margin: 0;
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
.col-md-6 {
  padding: 0;
  margin: 10px;
  width: 500px;
  height: 100%;
  display: flex;
  border: 1px solid green;
}
.col-md-6 .left {
  width: 300px;
  height: 300px;
  padding: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fff;
}
.left img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  padding:10px;
}
.right {
  width: 200px;
  height: 300px;
  padding: 0;
  margin: 0;
  background: black;
}
.right h4 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  padding: 5px;
}
.right ul {
  display: block;
  padding: 0;
  margin: 0;
  background: rgb(2, 17, 59);
}
.right ul li {
  list-style: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}
.right p {
  padding: 5px;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
}
}
</style>