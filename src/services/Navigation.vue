<template>
  <div class="navigation">
    <nav>
      <div class="brand">
        <div>
          <router-link to="/home">
          <img src="../assets/image/log.png" />
          </router-link>
        </div>
      </div>
      <div class="navbar">
        <div class="login">
          <p><i class="fa fa-phone" aria-hidden="true"></i>+8801810084300</p>
        </div>
        <ul class="ul">
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
                <router-link to="#">Poultry<i
                  class="fa fa-angle-right"
                  style="
                    margin-left:15px;
                    padding-top: 10px;
                    font-size: 1.5rem;
                  "
                  aria-hidden="true"
                ></i></router-link
                >
                <ul>
                   <li><router-link to="/enzymes">Enzymes</router-link></li>
                  <li>
                    <router-link to="/essensialoil">Essensial Oil</router-link>
                  </li>
                  <li>
                    <router-link to="/organicminarels"
                      >Organic Minarels
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/feedsanitizer">Feed Sanitizer</router-link>
                  </li>

                  <li>
                    <router-link to="/probiotics">Probiotic</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="#">Cattle<i
                  class="fa fa-angle-right"
                  style="
                    margin-left:27px;
                    padding-top: 10px;
                    font-size: 1.5rem;
                  "
                  aria-hidden="true"
                ></i></router-link
                >
                <ul>
                  <li>
                    <router-link to="/prebioticsc">Prebiotic</router-link>
                  </li>
                  <li>
                    <router-link to="/organicminarelsc">Organic Minerals</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="#">Aqua<i
                  class="fa fa-angle-right"
                  style="
                    margin-left:33px;
                    padding-top: 10px;
                    font-size: 1.5rem;
                  "
                  aria-hidden="true"
                ></i></router-link
                >
                <ul>
                  <li>
                    <router-link to="/probioticsa">Probiotics</router-link>
                  </li>
                  <li>
                    <router-link to="/organicminarelsa">Organic Minerals</router-link>
                  </li>
                  <li>
                    <router-link to="/essensialoila"
                      >Essential Oil</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><router-link to="/Gallery">Gallery</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li>
            <router-link to="/partners">Partners</router-link>
          </li>
          <li><router-link to="/contact">ContactUs</router-link></li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
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
  background-image: url("../assets/image/nav1.jpg");
  background-position: center;
  background-size: cover;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 3px rgba(14, 3, 77, 0.918);
}

nav .brand {
  width: 25%;
  height: 100%;
  display: block;
  /* padding-left: 150px; */
}
.brand img {
  width: 300px;
  height: 90px;
  margin-top: 15px;
  margin-left: 50px;
}
nav::after {
  content: " ";
  clear: both;
  display: table;
}
.navbar {
  display: flex;
  flex-direction: column;
  width: 75%;
}
.navbar .login {
  padding: 0;
  position: relative;
  justify-content: right;
  margin-left: 70%;
}
.navbar .login p {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  text-align: right;
}
.navbar .login p i {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  padding: 5px;
}
.navbar .ul {
  float: left;
  margin-left: 100px;
  margin-right: 0;
  position: relative;
}
.navbar .ul li {
  display: inline-block;
  margin: 0 5px;
  list-style: none;
  
}
.navbar .ul li a {
  color: #fff;
  text-decoration: none;
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  padding: 20px 15px;
  
}

.navbar .ul li a:hover,
.navbar .ul li a.router-link-active {
  color: #fff;
  background: rgba(14, 2, 83, 0.39);
}
.navbar .ul ul{
  background: rgba(0, 0, 0, 0.603);
}

.navbar .ul li ul li a {
  font-size: 1.5rem;
  font-weight: 500;
  box-shadow:none;
}
.navbar .ul ul li a:hover {
  color: #fff;
  box-shadow: none;
}
.navbar .ul ul {
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
.navbar .ul li:hover > ul {
  transform: translateY(15px);
  opacity: 1;
  visibility: visible;
}
.navbar .ul ul li {
  margin: 0;
  padding: 0;
  float: none;
  display: list-item;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.navbar .ul ul li:hover{
  background:rgba(8, 8, 8, 0.678);
  color: #fff;
}
.navbar .ul ul ul {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.3s;
  margin-left: 130px;
  z-index: 1;
  background: #0e7a0e9c;
  width: 180px;
  padding: 0;
}
.navbar .ul ul ul li {
  padding: 0;
  justify-content: center;
}
.navbar .ul ul ul li a {
  font-size: 1.2rem;
  text-align: center;
  color: #fff;
}

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
  background-image: url("../assets/image/nav1.jpg");
  background-position: center;
  background-size: cover;
  visibility: hidden;
}
nav {
  width: 100%;
  display: flex;
 flex-direction: column;
  box-shadow: 2px 2px 3px rgba(14, 3, 77, 0.918);
}

nav .brand {
  width: 25%;
  height: 100%;
  display: block;
  /* padding-left: 150px; */
}
.brand img {
  width: 300px;
  height: 90px;
  margin-top: 15px;
  margin-left: 50px;
}
nav::after {
  content: " ";
  clear: both;
  display: table;
}
.navbar {
  display: flex;
  flex-direction: column;
  width: 100%;
  display: none;
}
.navbar .login {
  padding: 0;
  position: relative;
  justify-content: right;
  margin-left: 0;
  display: none;
}
.navbar .ul {
  float: left;
  margin-right: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}
.navbar .ul li {
  position: relative;
  display: block;
  margin: 0 5px;
  list-style: none;
}
.navbar .ul li a {
  color: #fff;
  text-decoration: none;
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  padding: 5px 5px;
  
}

.navbar .ul li a:hover,
.navbar .ul li a.router-link-active {
  color: #fff;
  background: rgba(14, 2, 83, 0.39);
}
/* .navbar .ul ul{
  position: relative;
  background: rgba(0, 0, 0, 0.603);
} */

.navbar .ul ul {
  position: relative;
  opacity: 0;
  overflow-y: hidden;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.3s;
  margin-left: 0;
  z-index: 1;
  background: #0e7a0e9c;
  padding: 0;
  margin: 0;
}

.navbar .ul li ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  box-shadow:none;
}
.navbar .ul ul li a:hover {
  color: #fff;
  box-shadow: none;
}

.navbar .ul li:hover > ul {
  opacity: 1;
  visibility: visible;
}
.navbar .ul ul li {
  margin: 0;
  padding: 0;
  float: none;
  display: list-item;
  line-height: 10px;
  display: flex;
  justify-content: space-between;
}
.navbar .ul ul li:hover{
  background:rgba(8, 8, 8, 0.678);
  color: #fff;
}
.navbar .ul ul ul {
  position: relative;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  margin-left: 0;
  z-index: 1;
  background: #0e7a0e9c;
  width: 140px;
  padding: 0;
}
.navbar .ul ul ul li {
  padding: 0;
  justify-content: center;
}
.navbar .ul ul ul li a {
  font-size: 1.2rem;
  text-align: center;
  color: #fff;
}
}
</style>