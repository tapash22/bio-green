<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h3>Enzymes</h3>

        <div class="col-md-4" v-for="item in datos" :key="item">
          <div class="card">
            <img :src="item.image" />
            <div class="btn">
              <div>view</div>
              <div>
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="name">
              <p>{{ item.product_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
export default {
  data() {
    return {
      searchQuery: "enzyme",
      products: [],
      datos: [],
    };
  },
  created() {
    // const q = query(
    //   collection(db, "products"),
    //   where("product_name", "==", "enzyme")
    // );
    // const querySnapshot = getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   this.products.push(doc);
    // });

    // db.collection("products")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       this.products.push(doc);
    //     });
    //   });
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  // methods: {
  //   onPdf() {
  //     this.showPdf = true;
  //   },
  // },
};
</script>
        
<style scoped>
.products {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 122px;
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
.row .col-md-4 {
  padding: 10px;
}
.col-md-4 .card {
  padding: 0;
  margin: 0;
  width: 280px;
  height: 100%;
  border: none;
}
.col-md-4 .card img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.col-md-4 .card .btn {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 90px;
  right: -50px;
  width: 120px;
  height: 40px;
  background: #1ebbf0;
  border-radius: 20%/50%;
  padding: 0;
}
.col-md-4 .card .btn div {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 4px;
}
.col-md-4 .card .btn div i {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
}
/* .col-md-4 .card .btn div i:hover {
  transform: translateX(0);
} */
.col-md-4 .card .name {
  position: relative;
  padding: 10px;
}
.col-md-4 .card .name p {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}
</style>