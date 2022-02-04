<template>
  <div class="photo">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Event</h3>
          <p style="text-align: center; color: blue">Use 900px/400px Picture</p>
          <form>
            <div class="form-group">
              <label>Occation Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="gname"
              />
            </div>
            <div class="form-group">
              <label>Upload Image</label>
              <input
                class="form-control"
                type="file"
                ref="gimage"
                @change="uploadImage()"
              />
            </div>
            <div class="btn">
              <button class="btn btn-primary" @click.prevent="createGallery">
                Add Gallary
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
                <th>Event name</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="gallery in gallerys" :key="gallery.id">
                <td>{{ gallery.gname }}</td>
                <td>
                  <img :src="'/sub/storage/app/' + gallery.gimage" />
                </td>
                <td>
                  <button
                    @click.prevent="editProduct(gallery)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(gallery.id)"
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
              <label>Event Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="gallery.occation_name"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                class="form-control"
                v-model="gallery.description"
              ></textarea>
            </div>
            <div class="form-group my-4 upload">
              <label>Upload Image</label>
              <input
                type="file"
                @change="uploadImage"
                placeholder=" Use 900px/400px Picture"
              />
            </div>
            <div class="form-group">
              <div class="p-1">
                <img :src="gallery.image" style="width: 80px; height: 50px" />
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
import Gallery from "../../apis/Gallery";

export default {
  data() {
    return {
      gname: "",
      gimage: "",
      gallerys: [],
      id: "",
    };
  },

  created() {
    this.getGallery();
  },

  methods: {
    createGallery() {
      var data = new FormData();
      data.append("gname", this.gname);
      data.append("gimage", this.gimage);

      Gallery.addGallery(data, {
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

    getGallery() {
      Gallery.getGallery().then((response) => {
        this.gallerys = response.data;
        console.log(this.gallerys);
      });
    },

    uploadImage() {
      this.gimage = this.$refs.gimage.files[0];
    },

    deleteProduct(id) {
      if (window.confirm("Are you want to delete this?")) {
        Gallery.deleteGallery(id)
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
};
</script>

<style scoped>
.photo {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 20px;
  background: #fff;
}
.row {
  width: 100%;
  height: 600px;
  padding: 20px;
  margin: 0;
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
  margin: 0;
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