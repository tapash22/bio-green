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
            <div class="btn">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
          <!-- </div> -->
          <!-- <div class="col-md-7"> -->
          <div class="link">
            <ul class="ul">
              <transition-group name="slide-fade">
                <li v-if="show">
                  <router-link to="/home">Home</router-link>
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
                          <router-link to="/enzymes_poultry"
                            >Enzymes</router-link
                          >
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
                          <router-link to="/postbiotic_poultry"
                            >Postbiotic</router-link
                          >
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
                          <router-link to="/enzymes_aqua">Enzymes</router-link>
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
          <div class="info">
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
                  <router-link to="/home" @click="onClick()">Home</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/about" @click="onClick()"
                    >About</router-link
                  >
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
                          <router-link to="/enzymes_poultry" @click="onClick()"
                            >Enzymes</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/essentialoil_poultry"
                            @click="onClick()"
                            >Essential Oil</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/organicminerals_poultry"
                            @click="onClick()"
                            >Organic Minerals
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="/feedsanitizer_poultry"
                            @click="onClick()"
                            >Feed Sanitizer</router-link
                          >
                        </li>

                        <li>
                          <router-link
                            to="/postbiotic_poultry"
                            @click="onClick()"
                            >Postbiotic</router-link
                          >
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
                          <router-link
                            to="/postbiotic_cattle"
                            @click="onClick()"
                            >Postbiotic</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/organicminerals_cattle"
                            @click="onClick()"
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
                          <router-link to="/enzymes_aqua" @click="onClick()"
                            >Enzymes</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/postbiotic_aqua" @click="onClick()"
                            >Postbiotic</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/organicminerals_aqua"
                            @click="onClick()"
                            >Organic Minerals</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/essentialoil_aqua"
                            @click="onClick()"
                            >Essential Oil</router-link
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li v-if="!show">
                  <router-link to="/Gallery" @click="onClick()"
                    >Gallery</router-link
                  >
                </li>
                <li v-if="!show">
                  <router-link to="/blog" @click="onClick()">Blog</router-link>
                </li>
                <li v-if="!show">
                  <router-link to="/partners" @click="onClick()"
                    >Partners</router-link
                  >
                </li>
                <li v-if="!show">
                  <router-link to="/contact" @click="onClick()"
                    >Contact Us</router-link
                  >
                </li>
              </transition-group>
            </ul>
          </div>

          <div class="info">
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
        }, 200);
      }
    },
  },
};
</script>

<style>
@import "../assets/css/navi.css";
</style>
