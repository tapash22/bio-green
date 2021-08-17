<template>
  <div class="row event my-5">
    <div
      class="col-md-6"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div class="event-list">
        <img :src="occation.image" />
        <p>
          {{ occation.name }}<br />
          {{ occation.place }}
        </p>
      </div>
    </div>
    <div
      class="col-md-6 event-item"
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div class="box" v-for="occation in occations" :key="occation.id">
        <div class="box-h">
          <img :src="occation.data().image" />
        </div>

        <div class="box-b">
          <p>
            {{ occation.data().name }}<br />
            {{ occation.data().place }}
          </p>
          <button class="btn btn-primary" @click.prevent="onClick(occation)">
            View
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      occations: [],
      occation: {
        name: "",
        place: "",
        image: "",
      },
      active_item: null,
    };
  },

  created() {
    db.collection("occations")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.occations.push(doc);
        });
      });
  },

  methods: {
    onClick(occation) {
      this.occation = occation.data();
      this.active_item = occation.id;
    },
  },
};
</script>

<style scoped>
.event {
  padding: 0;
  margin: 10px;
  width: 100%;
  height: 500px;
  background: #fff;
}
.event h3 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
.event .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;
}
.event .event-list {
  width: 100%;
  height: 400px;
}
.event .event-list img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.event .event-list p {
  font-size: 1rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: left;
  padding-top: 10px;
}
.event .event-item {
  width: 50%;
  height: 400px;
  overflow-y: scroll;
}
.event .event-item .box {
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 10px;
  width: 100%;
}
.event .box .box-h {
  width: 100px;
  height: 100px;
}
.event .box a {
  text-decoration: none;
}
.event .box .box-h img {
  width: 100%;
  height: 100%;
  background-position: center;
}
.event .box .box-b {
  width: 300px;
  height: 100px;
  padding: 0;
  margin: 0;
}
.event .box .box-b p {
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: left;
}
</style>