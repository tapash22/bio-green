<template>
  <div class="product">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Product</h3>
          <form>
            <div class="form-group">
              <label>Product Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="product name.."
                v-model="product.name"
              />
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Pdf</label>
              <input class="form-control" type="file" @change="uploadPdf" />
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input class="form-control" type="file" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="product.image" style="width: 80px; height: 50px" />
              </div>
            </div>
            <div class="btn">
              <button class="btn btn-primary" @click.prevent="saveData">
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
                <th>Image</th>
                <th>PDF</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="enzyme in enzymes" :key="enzyme.id">
                <td>{{ enzyme.data().name }}</td>
                <td>{{ enzyme.data().image }}</td>
                <td>{{ enzyme.data().pdf }}</td>
                <td>
                  <button
                    @click.prevent="editProduct(enzyme)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(enzyme.id)"
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
              <label>Enzyme Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="enzyme.name"
              />
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
                <img :src="product.image" style="width: 80px; height: 50px" />
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
import { fb, db } from "../../firebase";
export default {
  name: "product",
  data() {
    return {
      showModal: false,
      enzymes: [],
      enzyme: {
         name: "",
        image: "",
        pdf: "",
      },
      active_item: null,
    };
  },

  created() {
    this.readData();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    deleteImage() {},
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("enzymes/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          () => {},
          () => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.enzyme.image = downloadURL;
              console.log("File available at", downloadURL);
            });
          }
        );
      }
    },

    uploadPdf(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("pdf/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          () => {},
          () => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.pdf = downloadURL;
              console.log("File available at", downloadURL);
            });
          }
        );
      }
    },

    inClose() {
      this.showModal = false;
    },

    watcher() {
      db.collection("enzymes").onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.enzymes.push(doc);
        });
      });
    },

    updateProduct() {
      db.collection("enzymes")
        .doc(this.active_item)
        .update(this.enzyme)
        .then(() => {
          this.showModal = false;
          this.watcher();
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },

    editProduct(enzyme) {
      this.showModal = true;
      this.enzyme = enzyme.data();
      this.active_item = enzyme.id;
    },

    deleteProduct(doc) {
      if (confirm("Are you sure?")) {
        db.collection("enzymes")
          .doc(doc)
          .delete()
          .then(() => {
            this.watcher();
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }
    },

    readData() {
      db.collection("enzymes")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.enzymes.push(doc);
          });
        });
    },
    reset() {
      this.enzyme = {
        name: "",
        image: "",
        pdf: "",
      };
    },

    saveData() {
      db.collection("enzymes")
        .add(this.enzyme)
        .then((docRef) => {
          this.reset();
          this.readData();
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
  },
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 110px;
  background: #fff;
}
.row {
  width: 100%;
  height: 750px;
  padding: 20px;
  margin-left: 25%;
  display: flex;
}
.col-md-12 {
  width: 100%;
  height: 100%;
  padding: 10px;
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
  margin-left: 25%;
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