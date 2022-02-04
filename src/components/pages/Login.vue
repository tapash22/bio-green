<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Login Form</h3>
          <form>
            <div class="from-group">
              <label>Email</label>
              <input type="text" class="form-control" v-model.trim="form.email" />
              <span class="text-danger" v-if="errors.email">
                {{ errors.email[0] }}
              </span>
            </div>
            <div class="from-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                v-model.trim="form.password"
              />
              <span class="text-danger" v-if="errors.password">
                {{ errors.password[0] }}
              </span>
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="login">
                LogIn
              </button>
            </div>
          </form>
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
        email: "",
        password: "",
        device_name: "browser",
      },
      errors: [],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    login() {
      User.login(this.form)
        .then((response) => {
          this.$root.$emit("login", true);
          localStorage.setItem("token", response.data);
          this.$router.push("/admin");
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

<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 142px;
}
.row {
  width: 100%;
  height: 100%;
  /* background: #fff; */
  display: flex;
  justify-content: center;
  padding: 20px;
}
.col-md-6 {
  box-shadow: 2px 2px 3px blue;
  background: #fff;
}
.col-md-6 h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
form {
  width: 100%;
  height: 100%;
  padding: 10px;
}
label {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
}

@media only screen and (max-width: 436px) {
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 100px;
  }
  .row {
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    margin: 0;
  }
  .row h3 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "MonteCarlo", cursive;
    color: #000;
    padding-top: 30px;
    padding-bottom: 10px;
  }
}
</style>