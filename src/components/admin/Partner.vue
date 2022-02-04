<template>
  <div class="partner">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Partner</h3>
          <p style="text-align: center; color: blue">Use 300px/250px Picture</p>
          <form>
            <div class="form-group">
              <label>Company Name</label>
              <input class="form-control" type="text" v-model="pname" />
            </div>
            <div class="form-group">
              <label>company Link</label>
              <input class="form-control" type="text" v-model="plink" />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" v-model="pdescription"></textarea>
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

            <div class="btn">
              <button class="btn btn-primary" @click.prevent="createPartner">
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
                <th>Company link</th>
                <th>Detail</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="partner in partners" :key="partner.id">
                <td>{{ partner.pname }}</td>
                <td>{{ partner.plink }}</td>
                <td>{{ partner.pdescription }}</td>
                <td>
                  <img :src="'/sub/storage/app/' + partner.pimage" />
                </td>
                <td>
                  <button
                    @click.prevent="editProduct(partner.id)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deletePartner(partner.id)"
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
              <label>Website</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.company_site"
              />
            </div>

            <div class="form-group">
              <label>company Link</label>
              <input
                class="form-control"
                type="text"
                v-model="partner.company_link"
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
              <input
                class="form-control"
                type="file"
                @change="uploadImage"
                placeholder=" Use 300px/250px Picture"
              />
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
import Partner from "../../apis/Partner";

export default {
  data() {
    return {
      pname: "",
      plink: "",
      pdescription: "",
      pimage: "",
      partners: [],
      id: "",
    };
  },

  created() {
    this.getPartner();
  },

  methods: {
    createPartner() {
      var data = new FormData();
      data.append("pname", this.pname);
      data.append("plink", this.plink);
      data.append("pdescription", this.pdescription);
      data.append("pimage", this.pimage);

      Partner.addPartner(data, {
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

    getPartner() {
      Partner.getPartner().then((response) => {
        this.partners = response.data;
        console.log(this.partners);
      });
    },

    uploadImage() {
      this.pimage = this.$refs.pimage.files[0];
    },

    deletePartner(id) {
      if (window.confirm("Are you want to delete this?")) {
        Partner.deletePartner(id)
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
.partner {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 20px;
  background: #fff;
}
.row {
  width: 100%;
  height: 750px;
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