<template>
  <div class="light">
    <div class="container">
      <div class="row">
        <div
          class="col-md-4"
          v-for="gallery in gallerys"
          :key="gallery"
          @click="() => showImg(index)"
        >
          <div class="card">
            <a @click.prevent="showImg(gallery)">
              <img :src="gallery.data().image" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      v-if="visible"
      @click="handleHide()"
    >
      <div class="modal-body">
        <div class="image">
          <img :src="gallery.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import { db } from "../firebase";
// import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    // VueEasyLightbox,
  },
  data() {
    return {
      visible: false,
      index: 0,
      gallerys: [],
      gallery: {
        occation_name: "",
        description: "",
        image: "",
      },
      active_item: null,
    };
  },
  created() {
    db.collection("gallerys", "image")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.gallerys.push(doc);
        });
      });
  },
  methods: {
    showImg(gallery) {
      this.visible = true;
      this.gallery = gallery.data();
      this.active_item = gallery.id;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.light {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 5px;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.col-md-4 {
  width: 33%;
  height: 100%;
  padding: 5px;
  margin: 0;
  border: 1px solid blue;
}
.col-md-4 .card {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card a {
  padding: 0;
  margin: 0;
}
.col-md-4 .card img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  padding: 0;
  margin: 0;
}
.modal {
  display: block;
  background: rgba(0, 0, 0, 0.8);
}
.modal .image {
  padding: 10px;
  margin: 20px;
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
}
.modal .image img {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 992px) {
  .light {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 5px;
  }
  .row {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: -10px;
    display: flex;
    flex-direction: column;
  }
  .row .col-md-4{
    width: 100%;
    padding:5px;
    margin:0;
  }
  .row .col-md-4 .card{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .modal {
    display: none;
  }

}

@media only screen and (max-width: 436px) {
  .light {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 5px;
  }
  .row {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: -10px;
    display: flex;
    flex-direction: column;
  }
  .row .col-md-4{
    width: 100%;
    padding:5px;
    margin:0;
  }
  .row .col-md-4 .card{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .modal {
    display: none;
  }
}
</style>