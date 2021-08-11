<template>
  <div class="navigation">
    <nav>
      <div class="brand">
        <div>
          <img src="../assets/image/logo.png" />
        </div>
        <div>
          <ul>
            <li><i class="fa fa-clock-o" aria-hidden="true"></i></li>
            <li>Sunday – Thursday</li>
            <li>10 AM – 7 PM</li>
          </ul>
        </div>
        <div class="login">
          <ul>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>+8801810084300
            </li>
            <li>
              <router-link to="/login"
                ><i class="fa fa-sign-in" aria-hidden="true"></i
                >login</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li>
            <router-link to="/products"
              >Products<i
                class="fa fa-angle-down"
                style="padding-left: 5px; padding-top: 5px"
                aria-hidden="true"
              ></i
            ></router-link>
            <ul>
              <li>
                <router-link to="/poultry">Poultry</router-link
                ><i
                  class="fa fa-angle-right"
                  style="
                    padding-right: 5px;
                    padding-top: 10px;
                    font-size: 1.5rem;
                  "
                  aria-hidden="true"
                ></i>
                <ul>
                  <li><router-link to="/nonAntibiotic">Non-Antibiotic Growth Promoters </router-link></li>
                  <li><router-link to="/emulsifire">Feed Emulsifire</router-link></li>
                  <li><router-link to="/enzymes">Enzymes</router-link></li>
                  <li><router-link to="/antioxident">Antioxident anti stress</router-link></li>
                  <li><router-link to="/renal">Renal Disorders</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/ruminent">Ruminent</router-link
                ><i
                  class="fa fa-angle-right"
                  style="
                    padding-right: 5px;
                    padding-top: 10px;
                    font-size: 1.5rem;
                  "
                  aria-hidden="true"
                ></i>
                 <ul>
                  <li><router-link to="/ruminal">Ruminal Disorders</router-link></li>
                  <li><router-link to="/uterin">Uterin Cleancer</router-link></li>
                  <li><router-link to="/udder">Udder Support</router-link></li>
                  <li><router-link to="/nutrisonal">Nutrisonal Disorders</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/aqua">Aquaculture</router-link
                ><i
                  class="fa fa-angle-right"
                  style="
                    padding-right: 5px;
                    padding-top: 10px;
                    font-size: 1.5rem;
                  "
                  aria-hidden="true"
                ></i>
                 <ul>
                   <li><router-link to="/probiotics">Probiotics</router-link></li>
                  <li><router-link to="/planton">Planton promoters</router-link></li>
                  <li><router-link to="/immunostimulants">Immunostimulants</router-link></li>
                  <li><router-link to="/amonia">Amonia Reducer</router-link></li>
                  <li><router-link to="/feed">Feed Binding Gel</router-link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><router-link to="/Gallery">Gallery</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li>
            <router-link to="/partners"
              >Partners<i
                class="fa fa-angle-down"
                style="padding-left: 5px; padding-top: 5px"
                aria-hidden="true"
              ></i
            ></router-link>
            <ul>
              <li>
                <router-link to="/localpartner">Local partners</router-link>
              </li>
              <li>
                <router-link to="/globalpartner">Global partners</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/contact">ContactUs</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation {
  width: 100%;
  background: #fff;
  color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
  position: fixed;
  background-image: url("../assets/image/nav.jpg");
  background-position: center;
  background-size: cover;
}
nav {
  width: 100%;
}

nav .brand {
  display: flex;
  justify-content: space-between;
  /* padding-left: 150px; */
  
}
.brand img {
  width: 300px;
  height: 55px;
  padding-top: 10px;
  margin-top: 15px;
  margin-left: 50px;
}
.brand ul {
  display: flex;
  padding-top: 30px;
}
.brand ul li {
  list-style: none;
  padding: 5px;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
}
.brand ul li i {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
}
.brand .login {
  margin-right: 100px;
  padding: 5px;
}
.brand .login ul {
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
.brand .login ul li {
  font-size: 16px;
  font-weight: 500;
  list-style: none;
  padding-top: 5px;
}
.brand .login ul li a {
  font-size: 20px;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}
.brand .login ul li i {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  padding-right: 5px;
}
.brand .login ul li a i {
  font-size: 2rem;
  font-weight: 700;
}
nav::after {
  content: " ";
  clear: both;
  display: table;
}
.navbar {
  background: #b2afda1f;
  box-shadow: 2px 2px 3px rgb(59, 161, 59);
}
.navbar ul {
  float: left;
  margin-left: 100px;
  margin-right: 0;
  position: relative;
}
.navbar ul li {
  display: inline-block;
  margin: 0 5px;
  list-style: none;
}
.navbar ul li a {
  color: #fff;
  text-decoration: none;
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  padding: 8px 15px;
}

.navbar ul li a:hover,
.navbar ul li a.router-link-active {
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 5px #33ffff, 0 0 5px #66ffff;
}
.navbar ul ul li a {
  font-size: 1.5rem;
  font-weight: 500;
}
.navbar ul ul li a:hover {
  color: black;
  box-shadow: none;
}
.navbar ul ul {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: all 0.3s;
  margin-left: -30px;
  z-index: 1;
  background: #0e7a0e9c;
  padding: 0;
  margin: 0;
}
.navbar ul li:hover > ul {
  transform: translateY(15px);
  opacity: 1;
  visibility: visible;
}
.navbar ul ul li {
  margin: 0;
  padding: 0;
  float: none;
  display: list-item;
  border-bottom: 1px solid #fff;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.navbar ul ul ul{
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.3s;
  margin-left: 173px;
  z-index: 1;
  background: #0e7a0e9c;
  width: 350px;
  padding: 0;
}
.navbar ul ul ul li{
  padding: 0;
  justify-content: center;
}
.navbar ul ul ul li a{
  font-size: 1.2rem;
  text-align: center;
}
/* <div class="brand">
        <div>
          <img src="../assets/image/logo.png" />
        </div>
        <div>
          <ul>
            <li><i class="fa fa-clock-o" aria-hidden="true"></i></li>
            <li>Sunday – Thursday</li>
            <li>10 AM – 7 PM</li>
          </ul>
        </div>
        <div class="login">
          <ul>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>+8801810084300
            </li>
            <li>
              <router-link to="/login"
                ><i class="fa fa-sign-in" aria-hidden="true"></i
                >login</router-link
              >
            </li>
          </ul>
        </div>
      </div> */

@media only screen and (max-width: 767px) {
 .navigation {
  width: 100%;
  background: #fff;
  color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
  position: fixed;
  background-image: url("../assets/image/nav.jpg");
  background-position: center;
  background-size: cover;
}
nav {
  width: 100%;
}

nav .brand {
  position: relative;
  display: flex;
  justify-content: center;
  /* padding-left: 150px; */
  width: 100%;
  height: 100%;
  background: #000;
}
.brand div{
  width: 100%;
  position: relative;
  justify-content: center;
}
.brand img {
  width: 100%;
  height: 55px;
  padding-top: 10px;
  margin-top: 10px;
  margin-left: 5px;
}
.brand ul {
 display: none;
} 
.brand .login {
  padding: 5px;
}
.brand .login ul {
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
.brand .login ul li {
  font-size: 16px;
  font-weight: 500;
  list-style: none;
  padding-top: 5px;
  text-align: center;
}
.brand .login ul li a {
  font-size: 20px;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}
.brand .login ul li i {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  padding-right: 5px;
}
.brand .login ul li a i {
  font-size: 2rem;
  font-weight: 700;
}
nav::after {
  content: " ";
  clear: both;
  display: table;
}
.navbar {
  background: #b2afda1f;
  box-shadow: 2px 2px 3px rgb(59, 161, 59);

}
.navbar ul {
  float: left;
  margin-left: 0;
  margin-right: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}
.navbar ul li {
  display: inline-block;
  margin: 0 5px;
  list-style: none;
  position: relative;

}
.navbar ul li a {
  color: #fff;
  text-decoration: none;
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  padding: 8px 15px;
}

.navbar ul li a:hover,
.navbar ul li a.router-link-active {
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 5px #33ffff, 0 0 5px #66ffff;
}
.navbar ul ul li a {
  font-size: 1.5rem;
  font-weight: 500;
}
.navbar ul ul li a:hover {
  color: black;
  box-shadow: none;
}
.navbar ul ul {
  position: relative;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transform: translateY(-30px);
  transition: all 0.3s;
  margin-left: 0;
  z-index: 1;
  background: #0e7a0e9c;
  padding: 0;
  margin: 0;
}
.navbar ul li:hover > ul {
  transform: translateY(15px);
  opacity: 1;
  visibility: visible;
}
.navbar ul ul li {
  margin: 0;
  padding: 0;
  float: none;
  display: list-item;
  border-bottom: 1px solid #fff;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.navbar ul ul ul{
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.3s;
  margin-left: 173px;
  z-index: 1;
  background: #0e7a0e9c;
  width: 350px;
  padding: 0;
}
.navbar ul ul ul li{
  padding: 0;
  justify-content: center;
}
.navbar ul ul ul li a{
  font-size: 1.2rem;
  text-align: center;
}
}
</style>