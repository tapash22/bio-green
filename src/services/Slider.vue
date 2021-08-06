<template>
  <div class="sld">
    <div class="sd" v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
    </div>

    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://i.postimg.cc/ZYgNpczH/1.jpg",
        "https://i.postimg.cc/4N9959Jg/2.jpg",
        "https://i.postimg.cc/W1mJRcFY/1d.jpg",
        "https://i.postimg.cc/xjWRnY89/2d.jpg",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 3000);
    },

    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped>
.sld {
    width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
}

.sd {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
img {
  height: 400px;
  width: 100%;
  opacity: 1;
  filter: brightness(90%);
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  color: green;
  font-weight: bold;
  font-size: 2.5rem;
  font-weight: 500;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 20px;
}

.prev {
  left: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
@media screen and (max-width: 759px) {
  .sld {
  width: 100%;
  height: 100%;
}

.sd {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
  img {
    height: 300px;
    width: 100%;
    opacity: 1;
    filter: brightness(90%);
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    color: green;
    font-weight: bold;
    font-size: 2rem;
    font-weight: 500;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
  }
  .next {
    right: 25px;
  }
  .prev {
    left: 10px;
  }
}
</style>