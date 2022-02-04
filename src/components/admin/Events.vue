<template>
  <div class="events">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Celebration</h3>
          <p style="text-align: center; color: blue">Use 500px/400px Picture</p>
          <form>
            <div class="form-group">
              <label>Occation Name</label>
              <input type="text" class="form-control" v-model="ename" />
            </div>
            <div class="form-group">
              <label>Occation Place</label>
              <input type="text" class="form-control" v-model="eplace" />
            </div>
            <div class="form-group">
              <label>Upload Image</label>
              <input
                class="form-control"
                type="file"
                ref="eimage"
                @change="uploadImage()"
              />
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="createEvents">
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
                <th scope="col">#</th>
                <th scope="col">Event Name</th>
                <th scope="col">Event place</th>
                <th scope="col">Event Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in events" :key="event.id">
                <td>{{ event.id }}</td>
                <td>{{ event.ename }}</td>
                <td>{{ event.eplace }}</td>
                <td>
                  <img :src="'/sub/storage/app/' + event.eimage" />
                </td>
                <td>
                  <button
                    @click="editProduct(event.id)"
                    class="btn btn-small btn-info"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(event.id)"
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
              <input
                class="form-control"
                type="file"
                @change="uploadImage"
                placeholder=" Use 500px/400px Picture"
              />
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
import Event from "../../apis/Events";

export default {
  data() {
    return {
      ename: "",
      eplace:"",
      eimage: "",
      events: [],
      id: "",
    };
  },

  created() {
    this.getOcations();
  },

  methods: {
    createEvents() {
      var data = new FormData();
      data.append("ename", this.ename);
      data.append("eplace", this.eplace);
      data.append("eimage", this.eimage);

      Event.addOcations(data, {
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

    getOcations() {
      Event.getOcations().then((response) => {
        this.events = response.data;
        console.log(this.events);
      });
    },

    uploadImage() {
      this.eimage = this.$refs.eimage.files[0];
    },

    deleteProduct(id) {
      if (window.confirm("Are you want to delete this?")) {
        Event.deleteEvent(id)
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
.events {
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