<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <h3
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Our Products
        </h3>
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div
            class="card"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-once="false"
          >
            <div class="card-body" v-if="product_n">
              <a href="#" @click.prevent="editProduct(product)">
                <div class="img">
                  <img :src="product.data().image" />
                </div>
              </a>
            </div>
            <div class="card-footer">
              <p>{{ product.data().product_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row" style="background:#000;">
      <Pdf />
    </div> -->
    <!-- <div class="row">
      <WebViewer initialDoc="https://docs.google.com/file/d/0B21HoBq6u9TsUHhqS3JIUmFuamc/view?resourcekey=0-MYlet9RIjEukd6CvLEHUbw" />
    </div> -->

    <div
      class="modal"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="inClose()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="img">
              <img :src="product.image" />
            </div>
            <div class="text">
              <h4>Product Name: {{ product.product_name }}</h4>
              <p class="wrap pt-3">
                <strong> Details:</strong>
                {{ product.description }}
              </p>
            </div>
            <div>
              {{product.pdf}}
            </div>
            <div>
              <a :to='product.pdf' class="btn"  @click.prevent="downloadResumePdf()">Download this file</a>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary">
              Close
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb,db } from "../../firebase";

// import WebViewer from '../WebViewer.vue';

export default {
  data() {
    return {
      product_n:"poultry",
      showModal: false,
      products: [],
      // pdfLink: require('@/assets/image/pdf.pdf'),
      // product: {
      //   product_name: "",
      //   description: "",
      //   image: "",
      //   pdf: "",
      // },
      active_item: null,
    };
  },

  components: {
    // WebViewer,
  },

 created() {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.products.push(doc);
        });
      });

  },

  methods: {
    editProduct(product) {
      this.showModal = true;
      this.product = product.data();
      this.active_item = product.id;
    },

    inClose() {
      this.showModal = false;
    },

   downloadResumePdf(){
      var storageRef = fb.storage().ref("pdf/book.pdf");
      storageRef.getDownloadURL().then((url)=>{
          const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
  
    xhr.open('GET', url);
    xhr.send();
      }).catch((error) => {
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
   }
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.products {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 142px;
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
  width: 300px;
  height: 300px;
}
.col-md-4 .card a {
  text-decoration: none;
}
.card-body {
  background: rgb(240, 237, 237);
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: 270px;
  padding: 0;
  margin: 0;
}
.card-body .img {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.img img {
  width: 100%;
  height: 100%;
  background-position: center;
}
.card-footer {
  padding: 0;
  margin: 0;
  border: none;
  background: rgb(240, 237, 237);
  display: flex;
  flex-direction: column;
}
.card-footer p {
  text-align: center;
  padding: 0;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
}

.modal {
  display: block;
  z-index: 99;
  background: rgba(0, 0, 0, 0.562);
  padding-top: 5%;
}
.modal .modal-content {
  width: 800px;
  margin-left: -20%;
}
.modal .modal-header {
  background: rgba(22, 11, 117, 0.822);
  padding: 0;
  margin: 0;
  width: 800px;
  position: relative;
  display: flex;
  justify-content: right;
}
.modal .modal-header .close {
  margin-left: 97%;
  background: rgba(22, 11, 117, 0.822);
}
.modal .modal-header .close span {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
}
.modal .modal-body {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 800px;
  height: 300px;
}
.modal .modal-body .img {
  width: 40%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.modal .modal-body .img img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.modal .modal-body .text {
  width: 60%;
  height: 100%;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.modal .modal-body .text h4 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  text-align: left;
  color: #000;
}
.modal .modal-body .text p {
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
}
.modal .modal-body .text p strong {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 5px;
  color: rgba(22, 11, 117, 0.822);
}
/* .modal .modal-body div .img {
  widows: 100%;
  height: 100%;
  background-position: center;
} */

@media only screen and (max-width: 767px) {
  .products {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: -50px;
  }
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
}
</style>