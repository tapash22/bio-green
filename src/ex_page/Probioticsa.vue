<template>
  <div class="products">
    <div class="container">
      <h3>Postbiotic</h3>
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product">
          <div class="card">
            <div class="card-body">
              <img :src="product.pimage" />
            </div>
            <div class="card-footer">
              <p>{{ product.pdname }}</p>
              <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
                >Show Details</router-link
              >
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
              <img :src="product.pimage" />
            </div>
            <div class="info">
              <h5>
                {{ product.pdname }}
              </h5>
              <p>{{ product.pdescription }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <a :href="product.ppdf" target="_parent"> Read Pdf </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
import Product from "../apis/Product";

export default {
  name: "Probioticsa",
  data() {
    return {
      showModal: false,
      products: [],
      id: "",
      active_item: null,
    };
  },

  created() {
    Product.getProbioticsa().then((response) => {
      this.products = response.data;
      console.log(this.products);
    });
  },

  methods: {
    inClose() {
      this.showModal = false;
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