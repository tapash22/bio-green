<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Login Form</h3>
          <form>
            <div class="from-group">
              <label>Email</label>
              <input type="text" class="form-control" v-model.trim="email" />
            </div>
            <div class="from-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                v-model.trim="password"
              />
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="onLogin">LogIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SignupValidation from '../../validation/SignupValidation';
import { fb } from "../../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  
  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    onLogin() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(()=>{
          this.$router.replace('/admin/dashboard');
        })
        .catch(function (error) {
          // Handle Errors here. 
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
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
  margin-top: 160px;
}
.row {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 20px;
}
.col-md-6 {
  box-shadow: 2px 2px 3px blue;
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

@media only screen and (max-width: 767px) {
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
    padding-top: 150px;
    padding-bottom: 10px;
  }
}
</style>