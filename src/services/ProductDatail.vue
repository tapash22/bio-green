<template>
  <div class="productdetail">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <div class="image">
              <img
                :src="
                  '/sub/storage/app/' + products.pimage
                "
              />
              <h3>{{ products.pdname }}</h3>
            </div>
            <div class="image1">
              <div class="info">
                <h4>
                  <strong
                    ><i
                      class="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    ></i
                  ></strong>
                  {{ products.pcname }}<br />
                  <strong
                    ><i
                      class="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    ></i></strong
                  >{{ products.pscname }}
                </h4>
              </div>
              <div class="des">
                <h3>Introduction</h3>
                <p>{{ products.pdescription }}</p>
              </div>

              <div class="des">
                <h3>Details</h3>
                <a :href="'/sub/storage/app/'+products.ppdf">Read pdf</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../apis/Product";

export default {
  data() {
    return {
      id: this.$route.params.id,
      products: [],
    };
  },

  created() {
    Product.getProductid(this.id).then((res) => {
      this.products = res.data;
      console.log(this.products);
    });
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.productdetail {
  margin-top: 120px;
  width: 100%;
  padding: 0;
}
.row {
  widows: 100%;
  height: 100%;
  background: #ffa6004f;
  padding: 10px;
  margin: 0;
}
.row .col-md-12 {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
}
.col-md-12 .box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.box .image {
  width: 40%;
  padding: 10px;
  margin: 0;
}
.image img {
  width: 100%;
  height: 300px;
  background-position: center;
  background-size: cover;
}
.image h3 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
}
.box .image1 {
  width: 60%;
  padding: 0;
  margin: 0;
}
.image1 .info {
  width: 100%;
  height: 100px;
  padding: 5px;
  margin: 5px;
}
.image1 .info h4 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  padding: 10px;
}
.image1 .info strong {
  padding: 5px;
  margin: 5px;
}
.image1 .des {
  display: flex;
  width: 100%;
  padding: 5px;
  margin: 5px;
}
.image1 .des h3 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
}
.image1 .des p {
  font-size: 1.2rem;
  font-weight: 900;
   font-family: "Luxurious Roman", cursive;
  padding: 5px;
  margin: 5px;
}
.image1 .des a{
  font-size: 1.2rem;
  font-weight: 900;
   font-family: "Oswald", sans-serif;
  padding: 15px;
  margin: 0;
  color: #000;
}

.image1 .des1 {
  width: 100%;
  padding: 5px;
  margin: 5px;
}
.image1 .des1 h3 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  text-align: left;
}

.image1 .des1 .image {
  width: 700px;
  height: 300px;
  padding: 5px;
  margin: 5px;
}
.image1 .des1 .image img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 436px) {
  .productdetail {
  margin-top: 120px;
  width: 100%;
  padding: 0;
}
.row {
  widows: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
  margin: 0;
}
.row .col-md-12 {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
}
.col-md-12 .box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.box .image {
  width: 100%;
  padding: 5px;
  margin: 0;
}
.image img {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.image h3 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}
.box .image1 {
  width: 100%;
  padding: 0;
  margin: 0;
}
.image1 .info {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.image1 .info h4 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  padding: 5px;
  margin: 0;
  display: block;
}
.image1 .info strong {
  padding: 0;
  margin: 0;
  text-align: center;
}
.image1 .info strong i{
  padding: 10px;
  margin: 0;
  font-size: 2rem;
  color: darkturquoise;
}
.image1 .des {
  display: block;
  width: 100%;
  padding: 5px;
  margin: 5px;
}
.image1 .des h3 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
}
.image1 .des p {
  font-size: 1.3rem;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  padding: 5px;
  margin: 5px;
}

.image1 .des1 {
  width: 100%;
  padding: 5px;
  margin: 5px;
}
.image1 .des1 h3 {
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  text-align: left;
}

.image1 .des1 .image {
  width: 700px;
  height: 300px;
  padding: 5px;
  margin: 5px;
}
.image1 .des1 .image img {
  width: 100%;
  height: 100%;
}

}
</style>