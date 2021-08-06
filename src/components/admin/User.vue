<template>
  <div class="user">
    <div class="row">
      <div class="col-md-6">
        <div class="form">
          <h3>Add User</h3>
          <form>
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" v-model="email" />

            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                v-model.trim="password"
              />
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="onCreate">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row2">
      <div class="col-md-8 offset-md-2">
        <div class="table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "../../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    onCreate() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email,this.password)
        .then(()=>{
          this.reset();
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    reset(){
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
};
</script>

<style scoped>
.user {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 110px;
  background: #fff;
}
.row {
  width: 100%;
  height: 500px;
  padding: 20px;
  margin-left: 25%;
  display: flex;
  background-image: url("../../assets/image/a_user.jpg");
  background-position: center;
  background-size: cover;
  opacity: 0.9;
}
.col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;

  box-shadow: 5px 3px 7px blue;
}
.form {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.form h3 {
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  text-align: center;
}
label {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  padding: 2px;
}
.row2 {
  width: 100%;
  height: 200px;
  padding: 20px;
  margin-left: 25%;
}
.col-md-8 {
  padding: 10px;
  width: 100%;
  margin: 5px;
  background: #fff;
  border: 2px solid blue;
}
.col-md-8 .table {
  padding: 10px;
  margin: 10px;
}
</style>