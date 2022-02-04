<template>
  <div class="blog">
    <div class="row">
      <div class="col-md-12">
        <div class="form">
          <h3>Add Blogs</h3>
          <p style="text-align: center; color: blue">Use 800px/400px Picture</p>
          <form>
            <div class="form-group">
              <label>Blog Title</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="btitle"
              />
            </div>
            <div class="form-group">
              <label>Author Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Event Name .."
                v-model="bauthor"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" v-model="bdescription"></textarea>
            </div>
            <div class="form-group">
              <label>Upload Image</label>
              <input
                class="form-control"
                type="file"
                ref="bimage"
                @change="uploadImage()"
              />
            </div>
            <div class="btn">
              <button class="btn btn-primary" @click.prevent="addBlog">
                Add Blog
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
                <td>{{ blog.btitle }}</td>
                <td>{{ blog.bauthor }}</td>
                
                <td>{{ blog.bdescription }}</td>
                <td><img :src="blog.bimage"/></td>
                <td>
                  <button
                    @click.prevent="editBlog(blog)"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteBlog(blog.id)"
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
import Blog from "../../apis/Blog";

export default {
  name: "blog",
  data() {
    return {
      showModal: false,
      blogs: [],
      id:"",
        btitle: "",
        bauthor: "",
        bdescription: "",
        bimage: "",
    };
  },

    created() {
    this.getBlogs();
  },

  methods: {
    addBlog() {
      var data = new FormData();
      data.append("btitle", this.btitle);
      data.append("bauthor", this.bauthor);
      data.append("bdescription", this.bdescription);
      data.append("bimage", this.bimage);

      Blog.addBlog(data, {
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

    getBlogs() {
      Blog.getBlog().then((response) => {
        this.blogs = response.data;
        console.log(this.blogs);
      });
    },

    uploadImage() {
      this.bimage = this.$refs.bimage.files[0];
    },

    deleteProduct(id) {
      if (window.confirm("Are you want to delete this?")) {
        Blog.deleteBlog(id)
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
.blog {
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