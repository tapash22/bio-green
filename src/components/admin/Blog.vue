<template>
  <div class="blog">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Blogs</h3>
          <p style="text-align:center;color:blue;">Use 800px/400px Picture</p>
          <form>
            <div class="form-group">
              <label>Blog Title</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="blog.title"
              />
            </div>
            <div class="form-group">
              <label>Author Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="blog.author"
              />
            </div>
            <div class="form-group">
              <label>Date</label>
              <input
                class="form-control"
                type="date"
                placeholder="05/09/2019"
                v-model="blog.mydate"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="blog.description"
              ></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input class="form-control" type="file" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="blog.image" style="width: 80px; height: 50px" />
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
                <th>title</th>
                <th>Author Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="blog in blogs" :key="blog.id">
                <td>{{ blog.data().title }}</td>
                <td>{{ blog.data().author}}</td>
                <td>{{ blog.data().mydate}}</td>
                <td>{{ blog.data().description }}</td>
                <td>{{ blog.data().image }}</td>
                <td>
                  <button
                    @click.prevent="editProduct(blog)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(blog.id)"
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
              <label>Blog Title</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="blog.title"
              />
            </div>
            <div class="form-group">
              <label>Author Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="blog.author"
              />
            </div>
            <div class="form-group">
              <label>Date</label>
              <input
                class="form-control"
                type="date"
                placeholder="05/09/2019"
                v-model="blog.mydate"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="blog.description"
              ></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input class="form-control" type="file" @change="uploadImage" />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="blog.image" style="width: 80px; height: 50px" />
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
  name: "blog",
  data() {
    return {
      showModal: false,
      blogs: [],
      blog: {
        title: "",
        author: "",
        description: "",
        image: "",
        mydate: "",
      },
      active_item: null,
    };
  },

  created() {
    db.collection("blogs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.blogs.push(doc);
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
        var storageRef = fb.storage().ref("blogs/" + file.name);
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
              this.blog.image = downloadURL;
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
      db.collection("blogs").onSnapshot((querySnapshot) => {
        this.blogs = [];
        querySnapshot.forEach((doc) => {
          this.blogs.push(doc);
        });
      });
    },

    updateProduct() {
      db.collection("blogs")
        .doc(this.active_item)
        .update(this.blog)
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

    editProduct(blog) {
      this.showModal = true;
      this.blog = blog.data();
      this.active_item = blog.id;
    },

    deleteProduct(doc) {
      if (confirm("Are you sure?")) {
        db.collection("blogs")
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
      this.blog = {
        title: "",
        author: "",
        description: "",
        image: "",
      };
    },

    saveData() {
      db.collection("blogs")
        .add(this.blog)
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
.blog {
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