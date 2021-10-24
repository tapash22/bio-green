<template>
<div class="client">
  <Navigation />

  <div class="row">
    <div class="col-md-12">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animate__animated animate__fadeInDown animate__fast	500ms "
          leave-active-class="animate__animated animate__fadeOutDown animate__fast 500ms"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import Navigation from "../../services/Navigation.vue";

import Footer from "../../services/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      // scrollPosition: null,
    };
  },

  components: {
    Navigation,

    Footer,
  },
  
};
</script>

<style scoped>

.row {
  padding: 0;
  margin: 0;
  background-image: url(../../assets/image/footer.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.col-md-12 {
  padding: 0;
}
</style>