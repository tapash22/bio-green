<template>
  <div class="product">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Product</h3>
          <p style="text-align: center; color: blue">Use 300px/250px Picture</p>
          <form>
            <div class="form-group">
              <label>Product Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Product Name .."
                v-model="pdname"
              />
            </div>
            <div class="form-group my-3">
              <select v-model="pcname" style="width: 100%; height: 40px">
                <option disabled value="">
                  Please click and select Category
                </option>
                <option>poultry</option>
                <option>cattle</option>
                <option>aqua</option>
              </select>
            </div>
            <div class="form-groupmy-3">
              <select v-model="pscname" style="width: 100%; height: 40px">
                <option disabled value="">
                  Please click and select Sub-Category
                </option>
                <option>Enzymes</option>
                <option>Essential oil</option>
                <option>Organic Minerals</option>
                <option>Feed Sanitizer</option>
                <option>Postbiotic</option>
              </select>
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" v-model="pdescription"></textarea>
            </div>
            <div class="form-group">
              <label>Upload Pdf</label>
              <input
                class="form-control"
                type="file"
                ref="ppdf"
                @change="uploadPdf()"
              />
            </div>
            <div class="form-group">
              <label>Upload Image</label>
              <input
                class="form-control"
                type="file"
                ref="pimage"
                @change="uploadImage()"
              />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img
                  :src="pimage"
                  style="width: 80px; height: 50px"
                  placeholder=" Use 300px/250px Picture"
                />
              </div>
            </div>
            <div class="btn">
              <button class="btn btn-primary" @click.prevent="createProduct">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row2">
      <div class="col-md-12">
        <div class="table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Product name</th>
                <th>Category</th>
                <th>Sub-category</th>
                <th>Description</th>
                <th>Image</th>
                <th>PDF</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.pdname }}</td>
                <td>{{ product.pcname }}</td>
                <td>{{ product.pscname }}</td>
                <td>{{ product.pdescription }}</td>
                <td>
                  <img :src="'/sub/storage/app/' + product.pimage" />
                </td>
                <td>{{ product.ppdf }}</td>
                
                <td>
                  <button
                    @click.prevent="editProduct(product)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(product.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

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
            <h5 class="modal-title" id="editLabel">Update Product</h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Product Name</label>
              <input
                class="form-control"
                toufiq201
                type="text"
                placeholder="Event Name .."
                v-model="product.product_name"
              />
            </div>
            <div class="form-group my-3">
              <select
                v-model="product.p_category"
                style="width: 100%; height: 40px"
              >
                <option disabled value="">Please select Category</option>
                <option>poultry</option>
                <option>cattle</option>
                <option>aqua</option>
              </select>
            </div>
            <div class="form-group my-3">
              <select
                v-model="product.sub_category"
                style="width: 100%; height: 40px"
              >
                <option disabled value="">Please select Sub-Category</option>
                <option>Enzymes</option>
                <option>Essential oil</option>
                <option>Organic Minerals</option>
                <option>Feed Sanitizer</option>
                <option>Postbiotic</option>
              </select>
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="product.description"
              ></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Pdf</label>
              <input type="file" @change="uploadPdf" />
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input type="file" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img
                  :src="product.image"
                  style="width: 80px; height: 50px"
                  placeholder=" Use 300px/250px Picture"
                />
                <span class="delete-img" @click="deleteImage(image)">X</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="inClose()">
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct()"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../apis/Product";
export default {
  name: "product",
  data() {
    return {
      showModal: false,
      pdname: "",
      pcname: "",
      pscname: "",
      pdescription: "",
      pimage: "",
      ppdf: "",

      products: [],
      id: "",
    };
  },

  created() {
    this.getProduct();
  },

  methods: {
    createProduct() {
      var data = new FormData();
      data.append("pdname", this.pdname);
      data.append("pcname", this.pcname);
      data.append("pscname", this.pscname);
      data.append("pdescription", this.pdescription);
      data.append("pimage", this.pimage);
      data.append("ppdf", this.ppdf);

      Product.addProduct(data, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          if (res.data.error) {
            console.log("errors", res.data.error);
            alert(res.data.error);
          } else {
            console.log(res.data.message);
            alert(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getProduct() {
      Product.getProduct().then((response) => {
        this.products = response.data;
        console.log(this.products);
      });
    },

    uploadImage() {
      this.pimage = this.$refs.pimage.files[0];
    },

    uploadPdf() {
      this.ppdf = this.$refs.ppdf.files[0];
    },

    deleteProduct(id) {
      if (window.confirm("Are you want to delete this?")) {
        Product.deleteProduct(id)
          .then((res) => {
            if (res.data.error) {
              console.log("errors", res.data);
              alert(res.data);
            } else {
              console.log(res.data.message);
              alert(res.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 20px;
  background: #fff;
}
.row {
  width: 100%;
  height: 800px;
  padding: 20px;
  margin:0;
  display: flex;
}
.col-md-12 {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #fff;
  box-shadow: 5px 3px 7px blue;
}
.form {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #fff;
}
.form h3 {
  font-size: 2rem;
  font-weight: 500;
  color: black;
  padding: 10px;
  text-align: center;
}
label {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  padding: 2px;
}
.row2 {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin:0;
}
.col-md-12 {
  padding: 0;
  width: 100%;
  background: #fff;
  border: 2px solid blue;
}
.col-md-12 .table {
  padding: 10px;
  margin: 0;
}

.modal {
  display: block;
}
</style>