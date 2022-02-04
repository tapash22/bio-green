<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-3">
        <nav>
          <a class="brand">
            <img src="../../assets/image/log.png" />
          </a>
          <ul>
            <li><router-link to="/admin/user">Add User</router-link></li>
            <li>
              <router-link to="/admin/product">Add product</router-link>
            </li>
            <li>
              <router-link to="/admin/partner">Add Partner</router-link>
            </li>
            <li><router-link to="/admin/photo">Add Photo</router-link></li>
            <li>
              <router-link to="/admin/slider">Add Slider</router-link>
            </li>
             <li>
              <router-link to="/admin/blog">Blog</router-link>
            </li>
              <li>
              <router-link to="/admin/events">Add Event</router-link>
            </li>
            <li><a href="#" @click.prevent="logout">Logout</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-body" v-if="user">
            <h3>Hello, {{ user.name }}</h3>
            <span>{{ user.email }}</span>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import User from "../../apis/User";

export default {
  data() {
    return {
      user: null,
    };
  },

  mounted() {
    User.auth().then((response) => {
      this.user = response.data;
    });
  },

  methods: {
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("token");
        this.$router.push("/home");
      });
    },
  },
};
</script>


<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.dashboard .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}

.row .col-md-3 {
  width: 25%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-3 nav {
  width: 25%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: green;
  position: fixed;
}
nav .brand {
  width: 100%;
  height: 20%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background: #fff;
  border-right: 1px solid green;
}
nav .brand img {
  width: 80%;
  height: 100%;
  padding: 15px;
  margin: 0;
}
nav ul {
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 0;
  display: block;
}
nav ul li {
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
nav ul li:hover {
  background: rgba(255, 255, 255, 0.486);
}
nav ul li a {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 10px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  color: #fff;
}
 .row .col-md-9 {
  width: 75%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: rgb(254, 255, 254);
  display: block;
} 
.col-md-9 .card{
  width: 100%;
  height: 80px;
  background: green;
  padding:10px;
  margin: 0;
  position: fixed;
  z-index: 99;
}
.card .card-body{
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.card-body h3{
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
  padding-right: 100px;
  margin: 0;
}
.card-body span{
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  margin: 0;

} 
</style>



