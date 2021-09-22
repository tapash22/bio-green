<template>
  <div class="navigation">
    <nav>
      <div class="brand">
        <div class="logo">
          <router-link to="/home">
            <img src="../assets/image/logo3.png" />
          </router-link>
        </div>
        <div class="icon" @click="showNav = !showNav">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
      <div class="navbar">
        <div class="login">
          <p><i class="fa fa-phone" aria-hidden="true"></i>+8801810084300</p>
        </div>
        <ul class="ul" v-if="showNav">
          <!-- <transition-group mode="out-in" name="slide-fade"> -->
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
                      style="
                        padding-left: 3px;
                        padding-top: 10px;
                        font-size: 1rem;
                      "
                      aria-hidden="true"
                    ></i
                  ></router-link>
                  <ul>
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
                      <router-link to="/probiotics">Prebiotic</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="#"
                    >Cattle<i
                      class="fa fa-angle-right"
                      style="
                        padding-left: 10px;
                        padding-top: 10px;
                        font-size: 1rem;"
                      aria-hidden="true"
                    ></i
                  ></router-link>
                  <ul>
                    <li>
                      <router-link to="/prebioticsc">Prebiotic</router-link>
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
                    >Aqua<i
                      class="fa fa-angle-right"
                      style="
                        padding-left: 10px;
                        padding-top: 10px;
                        font-size: 1rem;
                      "
                      aria-hidden="true"
                    ></i
                  ></router-link>
                  <ul>
                    <li>
                      <router-link to="/probioticsa">Prebiotic</router-link>
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
            <li>
              <router-link to="/login">Login</router-link>
            </li>
          <!-- </transition-group> -->
        </ul>
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
  background-image: url("../assets/image/c1.jpg");
  background-position: center;
  background-size: cover;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 3px rgba(14, 3, 77, 0.918);
  padding-bottom: 1px;
}

nav .brand {
  width: 25%;
  height: 100%;
  display: block;
  /* padding-left: 150px; */
}

.brand img {
  width: 300px;
  height: 60px;
  margin-top: 40px;
  margin-left: 50px;
}
.brand .icon {
  visibility: hidden;
  opacity: 0;
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
  color: #000;
  text-align: right;
  margin-top: 10px;
  margin-right: 80px;
}
.navbar .login p i {
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  padding: 5px;
}
.navbar .ul {
  float: left;
  margin-left: 100px;
  margin-right: 0;
  position: relative;
  width: 100%;
}
.navbar .ul li {
  display: inline-block;
  margin: 0 5px;
  list-style: none;
}
.navbar .ul li a {
  color: #000;
  text-decoration: none;
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  padding: 10px 15px;
  border-bottom: 2px none #fff;
}

.navbar .ul li a:hover,
.navbar .ul li a.router-link-active {
 
  border-bottom: 2px solid greenyellow;
}
.navbar .ul ul {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: all 0.3s;
  width: 180px;
  margin: 0;
  padding: 10px;
}
.navbar .ul ul li {
  width: 140px;
  margin: 0;
  padding: 0;
  float: none;
  display: list-item;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.navbar .ul li ul li a {
  font-size: 1.5rem;
  font-weight: 500;
  box-shadow: none;
  text-align: center;
}
.navbar .ul ul li:hover {
  background: rgba(8, 8, 8, 0.678);
  color: #fff;
}

.navbar .ul ul li a:hover {
  color: #fff;
  box-shadow: none;
}

.navbar .ul li:hover > ul {
  transform: translateY(15px);
  opacity: 1;
  visibility: visible;
}

.navbar .ul ul ul {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.3s;
  margin-left: 110px;
  z-index: 1;
  background: #0e7a0e9c;
  width: 180px;
  padding: 0;
}
.navbar .ul ul ul li {
  padding: 0;
  margin: 0;
  justify-content: center;
  display: flex;
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
    background: #000;
  }
  nav {
    width: 100%;
    display: grid;
    box-shadow: 2px 2px 3px rgba(14, 3, 77, 0.918);
    padding: 0;
  }

  nav .brand {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;

    /* padding-left: 150px; */
  }

  .brand img {
    width: 200px;
    height: 50px;
    margin-top: 15px;
    margin-left: 220px;
    margin-bottom: 10px;
    padding-right: 10px;
  }
  .brand .icon {
    visibility: visible;
    opacity: 1;
  }
  .brand .icon i {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    padding-top: 20px;
    margin-left: 40px;
    cursor: pointer;
  }
  nav::after {
    content: " ";
    clear: both;
    display: table;
  }
  .navbar {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    background: rgb(126, 23, 23);
    transition: 0.3s all ease-out;
  }
  .navbar .login {
    display: none;
  }
  .navbar .ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .navbar .ul li {
    display: block;
    margin: 15px 0;
    list-style: none;
    padding: 0;
    /* margin-left: -70px; */
  }
  .navbar .ul li a {
    position: relative;
    color: #fff;
    text-decoration: none;
    line-height: 30px;
    font-size: 20px;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .navbar .ul li:hover,
  .navbar .ul li a.router-link-active {
    color: #aff;
    background: rgba(0, 0, 0, 0.5);
  }

  .navbar .ul ul {
    position: static;
    width: 70%;
    display: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    background: rgb(126, 23, 23);
    z-index: 1;
  }
  .navbar .ul ul li {
    width: 200px;
    padding: 0;
    margin: 0;
  }

  .navbar .ul li ul li a {
    font-size: 1.2rem;
    font-weight: 500;
    box-shadow: none;
  }
  .navbar .ul ul li a:hover {
    color: #aff;
    box-shadow: none;
  }

  .navbar .ul li:hover > ul {
    position: relative;
    display: block;
  }

  .navbar .ul ul ul {
    position: static;
    display: none;
    transition: all 0.3s;
    margin-left: -130px;
    z-index: 1;
    background: rgb(126, 23, 23);
    width: 100%;
    padding: 0;
    margin-top: 50px;
  }
  /* .navbar .ul ul li:hover > ul {
 position: relative;
 display: block;
} */
  .navbar .ul ul ul li {
    padding: 0;
    justify-content: left;
  }
  .navbar .ul ul ul li a {
    font-size: 1rem;
    text-align: left;
    color: #fff;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  @keyframes navbar {
    0% {
      left: 50%;
    }
    100% {
      left: 0;
    }
  }
}
</style>