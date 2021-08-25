<template>
  <div class="photos">
    <div class="container">
      <div class="row">
        <h3>Event Gallery</h3>
        <lightbox></lightbox>
      </div>
    </div>
  </div>
</template>

<script>
import Lightbox from "../../services/Lightbox.vue";
// import VueSilentbox from 'vue-silentbox';
export default {
  components: {
    Lightbox,
  },
  data() {
    return{
        images: [
            {
                src: 'images/image001.jpg',
                description: 'Sunken dreams II. by Arbebuk',
            },
            {
                src: 'images/image002.jpg',
                description: 'Tunnel View Sunrise by Porbital',
            }
        ]
    }
    },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.photos {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 122px;
}
.row {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  margin: 0;
}
.row h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}

@media only screen and (max-width: 767px) {
  .photos {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: -50px;
}
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
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 150px;
    padding-bottom: 10px;
  }
}
</style>