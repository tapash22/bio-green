<template>
  <div class="admin">
    <div class="row">
      <div class="col-md-4">
        <nav>
          <div class="brand"><img src="../../assets/image/log.png" /></div>
          <ul>
            <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
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
          </ul>
        </nav>
      </div>
      <div class="col-md-8">
        <div class="main">
          <div class="row head-bar">
            <div class="col-md-12">
              <div class="brand"><img src="../../assets/image/log.png" /></div>
              <div class="header">
               
                <ul>
                  <li><a href="#" @click.prevent="onLogout()">LogOut</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from '../../firebase';
export default {
  methods:{
    onLogout(){
      fb.auth().signOut()
      .then(()=>{
        this.$router.replace('/home')
        .catch((err)=>{
          console.log(err);
        });
      })
    }
  }
};
</script>

<style scoped>
.admin {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #fff;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.col-md-4 {
  width: 20%;
  height: 100%;
  background: rgb(21, 30, 104);
  padding: 0;
  margin: 0;
  position: fixed;
}
nav {
  width: 100%;
  height: 100%;
  padding-bottom: 15px;
}
.brand {
  width: 100%;
  height: 120px;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 15px;
  padding-right: 15px;
}
.brand img {
  width: 100%;
  height: 100%;
  background-position: center;
  z-index: 1;
}
.col-md-4 ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.col-md-4 ul li {
  height: 60px;
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
}
.col-md-4 ul li a {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #fff;
  text-decoration: none;
  padding: 10px;
}
.col-md-4 ul li:hover,
.col-md-4 ul li a:hover
 {
  background: #fff;
  color: #000;
}
/* .col-md-4 ul li a.router-link-active{
  background: #fff;
} */
.col-md-8 {
  width: 80%;
  height: 100%;
  background: #fff;
  padding: 0;
  margin: 0;
}
.col-md-8 .main {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.main .head-bar {
  padding: 0;
  margin: 0;
  background: #fff;
}
.main .head-bar .col-md-12 {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100px;
  background: rgb(21, 30, 104);
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
}
.main .head-bar .col-md-12 .brand {
  width: 250px;
  height: 120px;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 30px;
  padding-right: 10px;
}
.main .head-bar .header {
  width: 30%;
  height: 100px;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  float: right;
}
/* .main .head-bar .header img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
}
.main .head-bar .header h5 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  font-family: "Oswald", sans-serif;
  padding-top: 35px;
} */
.main .head-bar .header ul {
  display: flex;
}
.main .head-bar .header ul li {
  width: 100px;
  height: 100px;
  text-align: center;
  list-style: none;
   padding-top: 30px;
   padding-left: 200px;
}
.main .head-bar .header ul li a {
  font-size: 1.5rem;
  font-weight: 500px;
  font-family: "Oswald", sans-serif;
  color: #fff;
  text-decoration: none;
}
</style>