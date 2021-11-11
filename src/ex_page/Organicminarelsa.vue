<template>
  <div class="products">
    <div class="container">
      <h3>Organic minarels</h3>

      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product">
          <div class="card">
            <div class="card-body">
              <img :src="product.data().image" />
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
              <h5 style="text-align: left; padding: 10px">
                {{ product.product_name }}
              </h5>
              <p>{{ product.description }}</p>
              <a :href="product.pdf" target="_parent"> Read Pdf </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
import { db } from "../firebase";

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
      .where("p_category", "==", "aqua")
      .where("sub_category", "==", "Organic Minerals")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });
  },

  methods: {
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
        
<style >
@import "../assets/css/subpage.css";
</style>
