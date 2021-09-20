<template>
  <div class="partner">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Partner</h3>
           <p style="text-align:center;color:blue;">Use 300px/250px Picture</p>
          <form>
            <div class="form-group">
              <label>Company Name</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.partner_name"
              />
            </div>
            <div class="form-group">
              <label>Country Name</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.country_name"
              />
            </div>
            <div class="form-group">
              <label>Product List</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.product_list"
              />
            </div>
            <div class="form-group">
              <label>company Link</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.product_link"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="partner.description"
              ></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input class="form-control" type="file" @change="uploadImage" placeholder=" Use 300px/250px Picture"/>
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="partner.image" style="width: 80px; height: 50px" />
                <span class="delete-img" @click="deleteImage(image)">X</span>
              </div>
            </div>
            <div class="btn">
              <button class="btn btn-primary" @click.prevent="saveData">
                Add Partner
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
                <th>Company Name</th>
                <th>Country Name</th>
                <th>Product List</th>
                <th>Detail</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="partner in partners" :key="partner.id">
                <td>{{ partner.data().partner_name }}</td>
                <td>{{ partner.data().country_name }}</td>
                <td>{{ partner.data().product_list }}</td>
                <td>{{ partner.data().product_link }}</td>
                <td>{{ partner.data().description }}</td>
                <td>{{ partner.data().image }}</td>
                <td>
                  <button
                    @click.prevent="editProduct(partner)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(partner.id)"
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
            <h5 class="modal-title" id="editLabel">Add Partner</h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Company Name</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.partner_name"
              />
            </div>
            <div class="form-group">
              <label>Country Name</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.country_name"
              />
            </div>
            <div class="form-group">
              <label>Product List</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.product_list"
              />
            </div>
            <div class="form-group">
              <label>company Link</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.product_link"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="partner.description"
              ></textarea>
            </div>
            <div class="form-group my-2 upload">
              <label>Upload Image</label>
              <input class="form-control" type="file" @change="uploadImage" placeholder=" Use 300px/250px Picture"/>
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="partner.image" style="width: 80px; height: 50px" />
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
  name: "partner",
  data() {
    return {
      showModal: false,
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

  methods: {
    deleteImage() {},
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("partners/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          () => {},
          () => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.partner.image = downloadURL;
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
      db.collection("partners").onSnapshot((querySnapshot) => {
        this.partners = [];
        querySnapshot.forEach((doc) => {
          this.partners.push(doc);
        });
      });
    },

    updateProduct() {
      db.collection("partners")
        .doc(this.active_item)
        .update(this.partner)
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

    editProduct(partner) {
      this.showModal = true;
      this.partner = partner.data();
      this.active_item = partner.id;
    },

    deleteProduct(doc) {
      if (confirm("Are you sure?")) {
        db.collection("partners")
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

    reset() {
      this.product = {
        partner_name: "",
        country_name: "",
        product_list: "",
        product_link:"",
        description: "",
        image: "",
      };
    },

    saveData() {
      db.collection("partners")
        .add(this.partner)
        .then((docRef) => {
          this.reset();
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
.partner {
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
  padding: 10px;
  width: 100%;
  margin: 5px;
  background: #fff;
  overflow-y: scroll;
  border: 2px solid blue;
}
.col-md-12 .table {
  padding: 10px;
  margin: 10px;
}
.modal {
  display: block;
}
</style>