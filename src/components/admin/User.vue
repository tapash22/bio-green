<template>
  <div class="user">
    <div class="row">
      <div class="col-md-6">
        <div class="form">
          <h3>Add User</h3>
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              v-model="form.name"
              class="form-control"
              id="name"
            />
            <span class="text-danger" v-if="errors.name">
              {{ errors.name[0] }}
            </span>
          </div>
          <div class="form-group">
            <label for="email">Email address:</label>
            <input
              type="email"
              v-model="form.email"
              class="form-control"
              id="email"
            />
            <span class="text-danger" v-if="errors.email">
              {{ errors.email[0] }}
            </span>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              v-model="form.password"
              class="form-control"
              id="password"
            />
            <span class="text-danger" v-if="errors.password">
              {{ errors.password[0] }}
            </span>
          </div>
          <div class="form-group">
            <label for="password_confirmation">Confirm Password:</label>
            <input
              type="password"
              v-model="form.password_confirmation"
              class="form-control"
              id="password_confirmation"
            />
            <span class="text-danger" v-if="errors.password_confirmation">
              {{ errors.password_confirmation[0] }}
            </span>
          </div>
          <button
            type="submit"
            @click.prevent="register"
            class="btn btn-primary btn-block"
          >
            Register
          </button>
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
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import User from "../../apis/User";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
      users: [],
    };
  },

  methods: {
    register() {
      User.register(this.form)
        .then(() => {
          alert("Registration successfull!!" + this.form.name);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

    // reset(){
    //   Object.assign(this.$data, this.$options.data.apply(this));
    // }


<style scoped>
.user {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 80px;
  background: #fff;
}
.row {
  width: 100%;
  height: 500px;
  padding: 20px;
  margin:0;
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
  margin:0;
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