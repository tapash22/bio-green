<template>
<div class="products">
    <div class="container">
      <div class="row">
        <h3>Feed sanitizer</h3>

        <div class="col-md-4" v-for="product in products" :key="product">
          <div class="card">
            <div class="card-body">
              <div class="img">
                <img :src="product.data().image" />
              </div>
            </div>
            <div class="card-footer">
              <p>{{ product.data().product_name }}</p>
              <a class="btn" @click.prevent="productDetail(product)">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pdrduct Detail</h5>
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
            <div class="image">
              <img :src="product.image" />
            </div>
            <div class="text">
              <h5 style="text-align:left;padding:10px;">{{ product.product_name }}</h5>
              <p>{{ product.description }}</p>
              <button
                class="btn btn-primary"
                :href="product.pdf"
                @click.prevent="downloadItem()"
              >
                Download Pdf
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
import { fb, db } from "../firebase";

export default {
  data() {
    return {
      showModal: false,
      products: [],
      product: {
        product_name: "",
        p_category: "",
        sub_category: "",
        description: "",
        image: "",
        pdf: "",
      },
      active_item: null,
    };
  },

  created() {
    db.collection("products")
      .where("p_category", "==", "poultry")
      .where("sub_category", "==", "Feed Sanitizer")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });
  },

  methods: {
    downloadItem(e) {
      var file = e.target.value[0];
      var storageRef = fb.storage().ref("pdf/"+file.name);
      storageRef
        .getDownloadURL(storageRef, { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("button");
          link.href = URL.createObjectURL(blob);
          link.download = storageRef;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    },

    inClose() {
      this.showModal = false;
    },

    productDetail(product) {
      this.showModal = true;
      this.product = product.data();
      this.active_item = product.id;
    },
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
  width: 300px;
  height: 300px;
  background: #ffa6006c;
}

.card-body {
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
    background: rgb(5, 19, 82);
  display: flex;
  flex-direction: column;
}
.card-footer p {
  text-align: center;
  padding: 0;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
}
.card-footer .btn{
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0;
  margin: 0;
  background: #ffa600f5;
}
.modal {
  display: block;
}

@media only screen and (max-width: 767px) {
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
  margin-left: 40px;
  margin-top: 5px;
    width: 250px;
    height: 300px;
    background: #ffa6006c;
  }

  .card-body {
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
    background: rgb(5, 19, 82);
    display: flex;
    flex-direction: column;
  }
  .card-footer p {
    text-align: center;
    padding: 0;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  .card-footer .btn {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 0;
    margin: 0;
    background: #ffa600f5;
  }
  .modal {
    display: block;
    margin-top: 150px;
    width: 350px;
    height: 100%;
  }
}
</style>