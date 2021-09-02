<template>
  <div class="light">
    <div class="row">
      <div
        class="col-md-4"
        v-for="(src, index) in imgs"
        :key="index" 
        @click="() => showImg(index)"
      >
        <div class="card">
          <img :src="src" />
        </div>
      </div>
      <!-- v-for="(src, index) in imgs"
        :key="index" -->
      <!-- all props & events -->
      <vue-easy-lightbox 
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import { db } from "../firebase";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
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
      // imgs: [
      //      {src:'https://via.placeholder.com/450.png/', title: 'this is title' },
      //      {src:'https://via.placeholder.com/300.png/', title: 'this is title' },
      //      {src:'https://via.placeholder.com/150.png/', title: 'this is title' },
      //     { src: 'https://via.placeholder.com/450.png/', title: 'this is title' }
      //   ]
      // default: 0
      imgs: [
        "https://i.postimg.cc/ZYgNpczH/1.jpg",
        "https://i.postimg.cc/4N9959Jg/2.jpg",
        "https://i.postimg.cc/W1mJRcFY/1d.jpg",
        "https://i.postimg.cc/xjWRnY89/2d.jpg",
        "https://i.postimg.cc/y8zmfD0w/company.jpg",
        "https://i.postimg.cc/FR13f3QJ/partner.png",
      ],
    };
  },
  created() {
    db.collection("gallerys")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.gallerys.push(doc);
        });
      });
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
         this.occation = index.data();
      this.active_item = index.id;
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
  padding: 10px;
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
  width: 30%;
  height: 100%;
  padding: 0;
  margin: 10px;
  border: 1px solid blue;
}
.col-md-4 .card {
  width: 300px;
  height: 200px;
  padding: 10px;
  margin: 10px;
}

.col-md-4 .card img {
  width: 100%;
  height: 100%;
  background-position: center;
}
.card p{
  z-index: 1;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: black;
}

@media only screen and (max-width: 767px) {
  .light {
    width: 100%;
    height: 100%;
    padding: 10px;
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
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 10px;
    border: 1px solid blue;
  }
  .col-md-4 .card {
    width: 300px;
    height: 200px;
    padding: 10px;
    margin: 10px;
  }

  .col-md-4 img {
    width: 100%;
    height: 100%;
    background-position: center;
  }
}
</style>