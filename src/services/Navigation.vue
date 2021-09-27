<template>
  <div class="navigation">
    <nav>
      <div class="row">
        <div class="col-md-3">
          <div class="brand">
            <img src="../assets/image/logo4.png" />
          </div>
        </div>
        <div class="col-md-7">
          <div class="link">
            <ul class="ul" v-if="showNav">
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
                    <router-link to="#"
                      >Poultry<i
                        class="fa fa-angle-right"
                        aria-hidden="true"
                      ></i
                    ></router-link>
                    <ul class="two">
                      <li>
                        <router-link to="/enzymes">Enzymes</router-link>
                      </li>
                      <li>
                        <router-link to="/essensialoil"
                          >Essential oil</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/organicminarels"
                          >Organic Minerals
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/feedsanitizer"
                          >Feed Sanitizer</router-link
                        >
                      </li>

                      <li>
                        <router-link to="/probiotics">Postbiotic</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="#"
                      >Cattle<i class="fa fa-angle-right" aria-hidden="true"></i
                    ></router-link>
                    <ul class="two">
                      <li>
                        <router-link to="/prebioticsc">Postbiotic</router-link>
                      </li>
                      <li>
                        <router-link to="/organicminarelsc"
                          >Organic Minerals</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="#"
                      >Aqua<i class="fa fa-angle-right" aria-hidden="true"></i
                    ></router-link>
                    <ul class="two">
                      <li>
                        <router-link to="/probioticsa">Postbiotic</router-link>
                      </li>
                      <li>
                        <router-link to="/organicminarelsa"
                          >Organic Minerals</router-link
                        >
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
              <li><router-link to="/contact">Contact Us</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <div class="text">
            <ul>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>+8801810084300
              </li>
              <li>
                <i class="fa fa-envelope-o" aria-hidden="true"
                  >&nbsp;info@biogreenint.com</i
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: true,
    };
  },
};
</script>

<style scoped>
.navigation {
  width: 100%;
  color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
  position: fixed;
  background-image: url("../assets/image/nave.jpg");
  background-position: center;
  background-size: cover;
}
nav {
  width: 100%;
  height: 120px;
  box-shadow: 2px 2px 3px rgba(14, 3, 77, 0.918);
}
nav .row {
  padding: 10px;
  margin: 0;
  width: 100%;
  position: relative;
  display: flex;
}
.nav .row .col-md-3 {
  padding: 0;
  margin: 0;
}
.row .col-md-3 .brand {
  padding: 10px;
  margin: 20px;
}
.col-md-3 .brand img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.col-md-7 {
  padding: 0;
  margin: 0;
}
.col-md-7 .link {
  padding-top: 40px;
  margin-top: 10px;
  position: relative;
}
.link .ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.link .ul li {
  list-style: none;
  padding: 5px;
}
.link .ul li a {
  font-size: 1.3rem;
  font-weight: 500;
  color: rgb(22, 4, 54);
  text-decoration: none;
  padding: 5px;
  border-bottom: 3px none #fff;
  transition: 1s transform ease-out;
}
.link .ul li:hover ul{
  display: block;
}
.link .ul li a:hover {
  border-bottom: 3px solid #000;
}
.link .ul li ul {
  position: absolute;
  display: none;
  padding: 0;
  margin: 0;
  background: #ffa600;
  margin-top: -30px;
}
.link .ul li ul li {
  padding: 10px;
  margin: 0;
}
.link .ul li ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  
}
.link .ul li ul li a:hover {
  border-bottom: 3px none #000;
  color: #fff;
}
.link .ul li ul li a i {
  padding-top: 5px;
  padding-left: 15px;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
}
.link .ul li ul li:hover{
    background: rgba(0, 0, 0, 0.24);
}

.link .ul li ul li:hover .two {
  display: block;
}

.link .ul li ul li .two {
  position: absolute;
  display: none;
  padding: 0;
  margin-left: 115px;
  background: #ffa600;

}
.link .ul li ul li .two li{
  padding: 10px;
  margin: 0;
  width: 200px;
}

.col-md-2 {
  padding: 0;
  margin: 0;
}
.col-md-2 .text {
  padding-top: 5px;
  margin-top: 0;
  position: relative;
  margin-left: -10px;
}
.col-md-2 .text ul {
  padding: 5px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.col-md-2 .text ul li {
  padding: 2px;
  list-style: none;
}
.col-md-2 .text ul li {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
}
.col-md-2 .text ul li i {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000;
  padding-right: 5px;
}
.col-md-2 .text ul li a {
  padding: 10px;
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
    background: #000;
  }
  nav {
    width: 100%;
    display: grid;
    box-shadow: 2px 2px 3px rgba(14, 3, 77, 0.918);
    padding: 0;
  }
}
</style>