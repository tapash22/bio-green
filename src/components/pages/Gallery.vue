<template>
  <div class="photos">
    <h3>Gallery</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <lightbox></lightbox>
        </div>
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
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.photos {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 130px;
}
.row {
  padding: 0;
  margin: 5px;
  width: 100%;
  height: 100%;
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

@media only screen and (max-width: 992px) {
  .photos {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 90px;
  }
  .row {
    padding: 0;
    margin: 5px;
    width: 100%;
    height: 100%;
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
}

@media only screen and (max-width: 436px) {
  .photos {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 90px;
    margin-bottom:20px;
  }
  .row {
    padding: 0;
    margin: 10px;
    width: 100%;
    height: 100%;
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
}
</style>