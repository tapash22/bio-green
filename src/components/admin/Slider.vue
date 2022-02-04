<template>
  <div class="slider">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Slider</h3>
          <p style="text-align: center; color: blue">
            Use 1360px/500px Picture
          </p>
          <form>
            <div class="form-group">
              <label>Slider Name</label>
              <input type="text" class="form-control" v-model="sname" />
            </div>
            <div class="form-group">
              <label>Upload Image</label>
              <input
                class="form-control"
                type="file"
                ref="simage"
                @change="uploadImage()"
              />
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="createSlider">
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
                <th scope="col">#</th>
                <th scope="col">slider Name</th>
                <th scope="col">slider Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="slider in sliders" :key="slider.id">
                <td>{{ slider.id }}</td>
                <td>{{ slider.sname }}</td>
                <td>
                  <img :src="'/sub/storage/app/' + simage" />
                </td>
                <td>
                  <button
                    @click="editProduct(slider.id)"
                    class="btn btn-small btn-info"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(slider.id)"
                    class="btn btn-small btn-warning"
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
              <input
                type="file"
                @change="uploadImage"
                placeholder=" Use 1360px/500px Picture"
              />
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
import Slider from "../../apis/Slider";

export default {
  data() {
    return {
      sname: "",
      simage: "",
      sliders: [],
      id: "",
    };
  },

  created() {
    this.getSlider();
  },

  methods: {
    createSlider() {
      var data = new FormData();
      data.append("sname", this.sname);
      data.append("simage", this.simage);

      Slider.addSlider(data, {
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

    getSlider() {
      Slider.getSlider().then((response) => {
        this.sliders = response.data;
        console.log(this.sliders);
      });
    },

    uploadImage() {
      this.simage = this.$refs.simage.files[0];
    },

    deleteProduct(id) {
      if (window.confirm("Are you want to delete this?")) {
        Slider.deleteSlider(id)
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
.slider {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 20px;
  background: #fff;
}
.row {
  width: 100%;
  height: 550px;
  padding: 20px;
  margin:0;
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
  margin:0;
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