<template>
  <div class="events">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Celebration</h3>
           <p style="text-align:center;color:blue;">Use 500px/400px Picture</p>
          <form>
            <div class="form-group">
              <label>Occation Name</label>
              <input type="text" class="form-control" v-model="occation.name" />
            </div>
            <div class="form-group">
              <label>Occation Place</label>
              <input
                type="text"
                class="form-control"
                v-model="occation.place"
              />
            </div>
            <div class="form-group">
              <label>Upload Image</label>
              <input type="file" class="form-control" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-3">
                <img :src="occation.image" style="width: 80px; height: 50px" placeholder=" Use 500px/400px Picture"/>
              </div>
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="saveData">
                Save
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
                <th>Name</th>
                <th>place</th>
                <th>Image</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="occation in occations" :key="occation.id">
                <td>{{ occation.data().name }}</td>
                <td>{{ occation.data().place }}</td>
                <td>{{ occation.data().image }}</td>
                <td>
                  <button
                    @click.prevent="editOccation(occation)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteOccation(occation.id)"
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
              <label>Occation Name</label>
              <input type="text" class="form-control" v-model="occation.name" />
            </div>
            <div class="form-group">
              <label>Occation Place</label>
              <input
                type="text"
                class="form-control"
                v-model="occation.place"
              />
            </div>
            <div class="form-group my-2 upload">
              <label>Upload Image</label>
              <input class="form-control" type="file" @change="uploadImage" placeholder=" Use 500px/400px Picture"/>
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="occation.image" style="width: 80px; height: 50px" />
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
              @click="updateOccation()"
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
  data() {
    return {
      showModal: false,
      occations: [],
      occation: {
        name: "",
        place: "",
        image: "",
      },
      active_item: null,
    };
  },

  created() {
    db.collection("occations")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.occations.push(doc);
        });
      });
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("occations/" + file.name);
        let uploadTask = storageRef.put(file);
        console.log(uploadTask);

        uploadTask.on(
          "state_changed",
          () => {},
          () => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.occation.image = downloadURL;
              console.log("File available at", downloadURL);
            });
            console.log(this.occation.image);
          }
        );
      }
    },

    inClose() {
      this.showModal = false;
    },

    watcher() {
      db.collection("occations").onSnapshot((querySnapshot) => {
        this.occations = [];
        querySnapshot.forEach((doc) => {
          this.occations.push(doc);
        });
      });
    },

    updateOccation() {
      db.collection("occations")
        .doc(this.active_item)
        .update(this.occation)
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

    editOccation(occation) {
      this.showModal = true;
      this.occation = occation.data();
      this.active_item = occation.id;
    },

    deleteOccation(doc) {
      if (confirm("Are you sure?")) {
        db.collection("occations")
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
      this.occation = {
        name: "",
        place: "",
        image: "",
      };
    },

    saveData() {
      db.collection("occations")
        .add(this.occation)
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
.events {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 110px;
  background: #fff;
}
.row {
  width: 100%;
  height: 550px;
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