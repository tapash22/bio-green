<template>
  <div class="row event my-2">
    <div
      class="col-md-6"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div class="event-list" v-if="active_item">
        <img :src="occation.image" />
        <p>
          {{ occation.name }}<br />
          <strong>{{ occation.place }}</strong>
        </p>
      </div>
      <div class="tt" v-else>
        <div class="ex" v-for="occation in occations" :key="occation">
          <img :src="occation.data().image" />
          <p>
           <i> {{ occation.data().name }}</i>
         <br/>{{ occation.data().place }}</p>
        </div>
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
            <i>{{ occation.data().name }}</i><br><strong>{{ occation.data().place }}</strong></p>
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

  /* display:flex;
  flex-direction: row; */
}

.event .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;
}
.col-md-6 .tt {
  width: 500px;
  height: 450px;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
}
.col-md-6 .ex {
  width: 500px;
  height: 450px;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
}
.col-md-6 .ex img {
  width: 500px;
  height: 400px;
  padding: 5px;
  margin: 0;
}
.col-md-6 .ex p {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
}
.event .event-list {
  width: 100%;
  height: 100%;
}
.event .event-list img {
  width: 100%;
  height: 400px;
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
  padding-bottom: 10px;
}
.event .event-item {
  width: 50%;
  height: 450px;
  overflow-y: scroll;
}
.event .event-item .box {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px;
  width: 100%;
}
.event .box .box-h {
  width: 120px;
  height: 115px;
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
  color: #000;
  text-align: left;
  
}
.event .box .box-b .btn {
  background: rgb(5, 19, 82);
}

@media only screen and (max-width: 767px) {
  .event {
    padding: 0;
    margin: 10px;
    width: 100%;
    height: 100%;
    display: block;
  }
  .event .col-md-6 {
    width: 100%;
    height: 400px;
    padding: 10px;
  }
  .event .event-list {
    width: 250px;
    height: 300px;
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
  .col-md-6 .tt {
  width: 250px;
  height: 300px;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
}
.col-md-6 .ex {
  width: 250px;
  height: 300px;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
}
.col-md-6 .ex img {
  width: 250px;
  height: 300px;
  padding: 5px;
  margin: 0;
}
.col-md-6 .ex p {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
}
  .event .event-item {
    width: 100%;
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
    padding-left: 15px;
    margin: 0;
  }
  .event .box .box-b p {
    font-size: 1rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #000;
    text-align: left;
  }
}
</style>