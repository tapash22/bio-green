<template>
  <div class="row event my-2">
    <div
      class="col-md-6"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div class="event-list" v-if="active_item">
        <div class="image">
        <img :src="occation.image" />
        </div>
        <p>
          {{ occation.name }}<br />
          <strong>{{ occation.place }}</strong>
        </p>
      </div>

      <div class="tt" v-else>
        <div class="ex" v-for="occation in occations" :key="occation">
          <div class="image">
          <img :src="occation.data().image" />
          </div>
          <p>
            <i> {{ occation.data().name }}</i>
            <br />{{ occation.data().place }}
          </p>
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
            <i>{{ occation.data().name }}</i
            ><br /><strong>{{ occation.data().place }}</strong>
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

  /* display:flex;
  flex-direction: row; */
}

.event .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;
}
.col-md-6 .tt {
  width: 100%;
  height: 400px;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
}
.col-md-6 .ex {
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
}
.col-md-6 .ex .image {
  width: 100%;
  height: 90%;
  padding: 10px;
  margin: 0;
}
.col-md-6 .ex .image img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-6 .ex p {
  height:10%;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
}
.event .event-list {
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 0;
}
.event .event-list .image {
  width: 100%;
  height: 90%;
  padding: 10px;
  margin: 5px;
  background-position: center;
  background-size: cover;
}
.event .event-list .image img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.event .event-list p {
  height: 10%;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: left;
  padding:0;
  margin-left: 20px;
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

@media only screen and (max-width: 992px) {
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
    margin-left: 0;
    padding: 0;
    width: 500px;
    height: 300px;
  }
 .event .event-list .image {
  width: 100%;
  height: 80%;
  padding: 10px;
  margin: 5px;
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
    margin-left: 10%;
    width: 500px;
    height: 300px;
    overflow-y: hidden;
    padding: 0;
    margin: 0;
  }
  .col-md-6 .ex {
    
    width: 500px;
    height: 300px;
    overflow-y: hidden;
    padding: 0;
    margin: 0;
  }
 .col-md-6 .ex .image {
  width: 100%;
  height: 0%;
  padding: 10px;
  margin: 5px;
}
  .col-md-6 .ex p {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 5px;
    margin: 0;
  }
  .event .event-item {
   
    width: 80%;
    height: 400px;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
  }
  .event .event-item .box {
   
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    margin: 10px;
    width: 100%;
  }
  .event .box .box-h {
    width: 150px;
    height: 150px;
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
    width: 250px;
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

@media only screen and (max-width: 436px) {
  .event {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .event .col-md-6 {
    width: 100%;
    height: 350px;
    padding: 10px;
    margin-left: -10px;
  }
  .event .event-list {
    width: 320px;
    height: 300px;
    padding: 0;
    margin:0;
  }
  .event .event-list img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .event .event-list p {
    height: 15%;
    font-size: 1rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    text-align: left;
    padding-top: -20px;
  }
  .col-md-6 .tt {
    width: 320px;
    height: 300px;
    overflow-y: hidden;
    padding: 0;
    margin: 0;
  }
  .col-md-6 .ex {
    width: 320px;
    height: 300px;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
  }
  .col-md-6 .ex .image {
     width: 320px;
  height: 80%;
  padding: 10px;
  margin: 5px;

  }
   .col-md-6 .ex .image img{
     width: 100%;
     height: 100%;
   }
  .col-md-6 .ex p {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 5px;
    margin: 0;
  }
  .event .event-item {
    width: 400px;
    height: 400px;
    overflow-y: scroll;
  }
  .event .event-item .box {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    margin: 5px;
    width: 100%;
    height: 200px;
  }
  .event .box .box-h {
    width: 200px;
    height: 150px;
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
    width: 180px;
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