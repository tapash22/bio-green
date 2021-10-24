<template>
  <div class="navigation">
    <div class="navi">
      <nav>
        <div class="row">
          <!-- <div class="col-md-3"> -->
          <div class="brand">
            <router-link to="/home" style="text-decoration: none">
              <img src="../assets/image/logo4.png" />
            </router-link>
            <div class="btn" @click="onClick()">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
          <!-- </div> -->
          <!-- <div class="col-md-7"> -->
          <div class="link">
            <ul class="ul">
              <transition-group name="slide-fade">
                <li v-if="show">
                  <router-link to="/home"
                    >Home</router-link
                  >
                </li>
                <li v-if="show">
                  <router-link to="/about">About</router-link>
                </li>
                 <li v-if="show">
                  <router-link to="/products" 
                    >Products<i
                      class="fa fa-angle-down"
                      style="padding-left: 20px; padding-top: 5px"
                      aria-hidden="true"
                    ></i
                  ></router-link>
                  <!-- sub-category -->
                  <ul>
                    <li>
                      <router-link to="/poultry" 
                        >Poultry<i
                          class="fa fa-angle-right"
                          aria-hidden="true"
                        ></i
                      ></router-link>
                      <ul class="two">
                        <li>
                          <router-link to="/enzymes_poultry" >Enzymes</router-link>
                        </li>
                        <li>
                          <router-link to="/essentialoil_poultry"
                            >Essential Oil</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/organicminerals_poultry" 
                            >Organic Minerals
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/feedsanitizer_poultry" 
                            >Feed Sanitizer</router-link
                          >
                        </li>

                        <li>
                          <router-link to="/postbiotic_poultry" >Postbiotic</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/cattle" 
                        >Cattle<i
                          class="fa fa-angle-right"
                          aria-hidden="true"
                        ></i
                      ></router-link>
                      <!-- sub-category -->
                      <ul class="two">
                        <li>
                          <router-link to="/postbiotic_cattle" 
                            >Postbiotic</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/organicminerals_cattle" 
                            >Organic Minerals</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/aqua"
                        >Aqua<i class="fa fa-angle-right" aria-hidden="true"></i
                      ></router-link>
                      <!-- sub-category -->
                      <ul class="two">
                        <li>
                          <router-link to="/enzymes_aqua" >Enzymes</router-link>
                        </li>
                        <li>
                          <router-link to="/postbiotic_aqua"
                            >Postbiotic</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/organicminerals_aqua" 
                            >Organic Minerals</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/essentialoil_aqua"
                            >Essential Oil</router-link
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li v-if="show">
                  <router-link to="/Gallery">Gallery</router-link>
                </li>
                <li v-if="show">
                  <router-link to="/blog">Blog</router-link>
                </li>
                <li v-if="show">
                  <router-link to="/partners">Partners</router-link>
                </li>
                <li v-if="show">
                  <router-link to="/contact">Contact Us</router-link>
                </li>
              </transition-group>
            </ul>
          </div>
          <!-- </div> -->
          <!-- <div class="col-md-2"> -->
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
          <!-- </div> -->
        </div>
      </nav>
    </div>

    <div class="mini">
      <nav>
        <div class="row">
          <div class="brand">
            <router-link to="/home" style="text-decoration: none">
              <img src="../assets/image/logo4.png" />
            </router-link>

            <div class="btn" @click="onClick()">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>

          <div class="link">
            <ul class="ul">
              <transition-group name="slide-fade">
                <li v-if="!show">
                  <router-link to="/home"  @click="onClick()">Home</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/about" @click="onClick()">About</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/products" 
                    >Products<i
                      class="fa fa-angle-down"
                      style="padding-left: 20px; padding-top: 5px"
                      aria-hidden="true"
                    ></i
                  ></router-link>
                  <!-- sub-category -->
                  <ul>
                    <li>
                      <router-link to="/poultry" 
                        >Poultry<i
                          class="fa fa-angle-right"
                          aria-hidden="true"
                        ></i
                      ></router-link>
                      <ul class="two">
                        <li>
                          <router-link to="/enzymes_poultry" @click="onClick()">Enzymes</router-link>
                        </li>
                        <li>
                          <router-link to="/essentialoil_poultry" @click="onClick()"
                            >Essential Oil</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/organicminerals_poultry" @click="onClick()"
                            >Organic Minerals
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/feedsanitizer_poultry" @click="onClick()"
                            >Feed Sanitizer</router-link
                          >
                        </li>

                        <li>
                          <router-link to="/postbiotic_poultry" @click="onClick()">Postbiotic</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/cattle" 
                        >Cattle<i
                          class="fa fa-angle-right"
                          aria-hidden="true"
                        ></i
                      ></router-link>
                      <!-- sub-category -->
                      <ul class="two">
                        <li>
                          <router-link to="/postbiotic_cattle" @click="onClick()"
                            >Postbiotic</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/organicminerals_cattle" @click="onClick()"
                            >Organic Minerals</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/aqua"
                        >Aqua<i class="fa fa-angle-right" aria-hidden="true"></i
                      ></router-link>
                      <!-- sub-category -->
                      <ul class="two">
                        <li>
                          <router-link to="/enzymes_aqua" @click="onClick()">Enzymes</router-link>
                        </li>
                        <li>
                          <router-link to="/postbiotic_aqua" @click="onClick()"
                            >Postbiotic</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/organicminerals_aqua" @click="onClick()"
                            >Organic Minerals</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/essentialoil_aqua" @click="onClick()"
                            >Essential Oil</router-link
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li v-if="!show">
                  <router-link to="/Gallery" @click="onClick()">Gallery</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/blog" @click="onClick()">Blog</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/partners" @click="onClick()">Partners</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/contact" @click="onClick()">Contact Us</router-link>
                </li>
              </transition-group>
            </ul>
          </div>

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
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  created() {},

  methods: {
    onClick() {
      this.show = !this.show;
      if (this.showSidebar) {
        this.showLink = true;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      }
    },
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
.navi {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: block;
}
nav {
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 3px rgba(14, 3, 77, 0.918);
  align-items: center;
}
nav .row {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
}

.row .brand {
  width: 20%;
  height: 80%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand a img {
  width: 280px;
  height: auto;
  padding: 10px;
  margin-left: 40px;
  align-content: center;
  align-items: center;
}
.brand .btn {
  display: none;
}

.link {
  padding-top: 40px;
  margin-top: 10px;
  position: relative;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.link .ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
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
  border-bottom: 3px none #000;
  transition: 1s transform ease-out;
}
.link .ul li:hover ul {
  display: block;
}
.link .ul li a:hover,
.link .ul li a.router-link-exact-active {
  border-bottom: 2px solid rgba(0, 0, 0, 0.267);
}
.link .ul li ul {
  position: absolute;
  display: none;
  padding: 0;
  margin: 0;
  background: #ffa600;
  margin-top: 5px;
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
  border-bottom: none;
}
.link .ul li ul li a:hover,
.link .ul li ul li a.router-link-exact-active {
  border-bottom: none;
  color: #fff;
}
.link .ul li ul li a i {
  padding-top: 5px;
  padding-left: 15px;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
}
.link .ul li ul li:hover {
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
  margin-top: -30px;
}
.link .ul li ul li .two li {
  padding: 10px;
  margin: 0;
  width: 200px;
}

.text {
  width: 20%;
  padding: 20px;
  margin-top: 0;
  position: relative;
  justify-content: center;
  align-items: center;
}
.text ul {
  padding: 5px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
}
.text ul li {
  padding: 2px;
  list-style: none;
}
.text ul li {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
}
.text ul li i {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000;
  padding-right: 5px;
}
.text ul li a {
  padding: 10px;
}
.mini {
  display: none;
}
@media only screen and (max-width: 992px) {
  .navigation {
    width: 100%;
    color: #fff;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
    position: fixed;
  }
  .navi {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .mini {
    display: none;
  }
  nav {
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 3px rgba(14, 3, 77, 0.918);
    align-items: center;
  }
  nav .row {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .row .brand {
    padding: 5px;
    margin: 0;
    width: 100%;
    display: flex;
  }
  .brand a img {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  .brand .btn {
    width: 50%;
    height: 100%;
    display: none;
    justify-content: center;
  }
  .brand i {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-top: 10px;
    margin-left: 100px;
    right: 0;
    display: flex;
    justify-content: right;
  }
  .link {
    padding-top: 0;
    margin-top: 0;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .link .ul {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 100%;
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
    border-bottom: 3px none #000;
    transition: 1s transform ease-out;
  }
  .link .ul li:hover ul {
    display: block;
  }
  .link .ul li a:hover,
  .link .ul li a.router-link-exact-active {
    border-bottom: 2px solid rgb(255, 255, 255);
  }
  .link .ul li ul {
    position: absolute;
    display: none;
    padding: 0;
    margin: 0;
    background: #ffa600;
    margin-top: 5px;
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
    border-bottom: none;
  }
  .link .ul li ul li a:hover,
  .link .ul li ul li a.router-link-exact-active {
    border-bottom: none;
    color: #fff;
  }
  .link .ul li ul li a i {
    padding-top: 5px;
    padding-left: 15px;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .link .ul li ul li:hover {
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
    margin-top: -30px;
  }
  .link .ul li ul li .two li {
    padding: 10px;
    margin: 0;
    width: 200px;
  }
  .text {
    display: none;
    padding-top: 5px;
    margin-top: 0;
    position: relative;
    margin-left: -10px;
    width: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .navigation {
    width: 100%;
    height: auto;
    color: #fff;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
    position: fixed;
  }
  .navi {
    display: none;
  }
  .mini {
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
  }
  .mini nav {
    width: 100%;
    height: auto;
    box-shadow: none;
    padding: 0;
    margin: 0;
  }
  .mini nav .row {
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    position: fixed;
  }
  .mini nav .row .brand {
    width: 415px;
    height: 90px;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    background-image: url("../assets/image/nave.jpg");
    background-position: center;
    background-size: cover;
  }

  .mini nav .brand a img {
    width: 250px;
    height: auto;
    padding: 10px;
    margin: 0;
  }
  .mini nav .brand .btn {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .mini nav .brand .btn i {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-top: 30px;
    margin-right: 70%;
  }

  .link {
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .link .ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  .link .ul li {
    list-style: none;
    padding: 0;
    display: block;
    background: #ffa600;
    height: 50px;
  }
  .link .ul li a {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(22, 4, 54);
    text-decoration: none;
    padding: 10px;
    border-bottom: none;
    transition: 1s transform ease-out;
    padding: 10px;
  }
  .link .ul li:hover ul {
    position: absolute;
    display: flexbox;
  }
  .link .ul li:hover {
    background: #ffa600;
  }
  .link .ul li a:hover {
    border-bottom: none;
  }
  .link .ul li ul {
    display: none;
    padding: 0;
    margin: 0;
    background: #ffa600;
    margin-top: 0;
    margin-left: 80px;
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
  .link .ul li ul li:hover {
    background: rgba(0, 0, 0, 0.24);
  }

  .link .ul li ul li:hover .two {
    position: absolute;
    display: flexbox;
  }

  .link .ul li ul li .two {
    position: absolute;
    display: none;
    padding: 0;
    margin-left: 95px;
    background: #ffa600;
    margin-top: -30px;
  }
  .link .ul li ul li .two li {
    padding: 10px;
    margin: 0;
    width: 200px;
  }

  .text {
    padding-top: 5px;
    margin-top: 0;
    position: relative;
    margin-left: -10px;
    width: 100%;
  }
  .text ul {
    padding: 5px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  .text ul li {
    padding: 2px;
    list-style: none;
  }
  .text ul li {
    font-size: 1.2rem;
    font-weight: 600;
    color: #000;
  }
  .text ul li i {
    font-size: 1.3rem;
    font-weight: 700;
    color: #000;
    padding-right: 5px;
  }
  .text ul li a {
    padding: 10px;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-in;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(10%);
    opacity: 0;
  }
}
</style>