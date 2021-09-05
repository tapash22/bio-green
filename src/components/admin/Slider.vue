<template>
  <div class="slider">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Slider</h3>
          <form>
            <div class="form-group">
              <label>Slider Name</label>
              <input type="text" class="form-control" v-model="slider.name" />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" v-model="slider.des"></textarea>
            </div>
            <div class="form-group">
              <label>Upload Image</label>
              <input type="file" class="form-control" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-3">
                <img :src="slider.image" style="width: 80px; height: 50px" />
              </div>
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="saveData">
                Add Slider
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
                <th>Description</th>
                <th>Image</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="slider in sliders" :key="slider.id">
                <td>{{ slider.data().name }}</td>
                <td>{{ slider.data().des }}</td>
                <td>{{ slider.data().image }}</td>
                <td>
                  <button
                    @click.prevent="editSlider(slider)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteSlider(slider.id)"
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
            <h5 class="modal-title" id="editLabel">Update Slider</h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Slider Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="slider.name"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" v-model="slider.des"></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input type="file" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="slider.image" style="width: 80px; height: 50px" />
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
              @click="updateSlider()"
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
      sliders: [],
      slider: {
        name: "",
        des: "",
        image: "",
      },
      active_item: null,
    };
  },

  created() {
    db.collection("sliders")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.sliders.push(doc);
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
        var storageRef = fb.storage().ref("sliders/" + file.name);
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
              this.slider.image = downloadURL;
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
      db.collection("sliders").onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.sliders.push(doc);
        });
      });
    },

    updateSlider() {
      db.collection("sliders")
        .doc(this.active_item)
        .update(this.slider)
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

    editSlider(slider) {
      this.showModal = true;
      this.slider = slider.data();
      this.active_item = slider.id;
    },

    deleteSlider(doc) {
      if (confirm("Are you sure?")) {
        db.collection("sliders")
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
      this.slider = {
        name: "",
        des: "",
        image: "",
      };
    },
    saveData() {
      db.collection("sliders")
        .add(this.slider)
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
.slider {
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