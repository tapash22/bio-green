<template>
  <div class="home">
    <Slider />
    <div class="container">
        
    <div class="row">
      <h3>Our product</h3>
        <p>We deliver performances rather just a product to your business</p>
        <div class="col-md-12" style="width: 100%; height: 100%">
          <Carousel />
        </div>
      </div>
      <div class="row event">
        <h3>Event List</h3>
        <div class="col-md-6">
          <div class="event-list">
            <img src="../../assets/image/event.jpg" />
            <p>Event name</p>
            <p>Event Data</p>
          </div>
        </div>
        <div class="col-md-6 event-item">
          <div class="box">
            <div class="box-h">
              <img src="../../assets/image/event.jpg" />
            </div>
            <div class="box-b">
              <p>
                31-july-2021<br />
                Bio-green Annual Excursion: 2020 <br />
                by Bio-green Resources Limited,at Dream Square Resort, Gazipur.
              </p>
            </div>
          </div>
          <div class="box">
            <div class="box-h">
              <img src="../../assets/image/event.jpg" />
            </div>
            <div class="box-b">
              <p>
                31-july-2021<br />
                Bio-green Annual Excursion: 2020 <br />
                by Bio-green Resources Limited,at Dream Square Resort, Gazipur.
              </p>
            </div>
          </div>
          <div class="box">
            <div class="box-h">
              <img src="../../assets/image/event.jpg" />
            </div>
            <div class="box-b">
              <p>
                31-july-2021<br />
                Bio-green Annual Excursion: 2020 <br />
                by Bio-green Resources Limited,at Dream Square Resort, Gazipur.
              </p>
            </div>
          </div>
          <div class="box">
            <div class="box-h">
              <img src="../../assets/image/event.jpg" />
            </div>
            <div class="box-b">
              <p>
                31-july-2021<br />
                Bio-green Annual Excursion: 2020 <br />
                by Bio-green Resources Limited,at Dream Square Resort, Gazipur.
              </p>
            </div>
          </div>
          <div class="box">
            <div class="box-h">
              <img src="../../assets/image/event.jpg" />
            </div>
            <div class="box-b">
              <p>
                31-july-2021<br />
                Bio-green Annual Excursion: 2020 <br />
                by Bio-green Resources Limited,at Dream Square Resort, Gazipur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../services/Slider.vue";
import Carousel from "../../services/Carousel.vue";

export default {
  components: {
    Slider,
    Carousel,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.home {
  margin-top: 160px;
}
.row {
  padding: 0;
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
.row p {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
}
.row2 {
  margin-top: 30px;
  background: #fff;
  display: flex;
  margin-bottom: 20px;
}
.row2 .col-md-4 {
  padding: 10px;
}

.event {
  padding: 0;
  margin: 10px;
  width: 100%;
  height: 500px;
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
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: left;
  padding: 0;
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
  font-size: 1rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: left;
}

@media only screen and (max-width: 767px) {
  .home {
    margin-top: 300px;
  }
  .row2 {
    margin-top: 30px;
    background: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .event {
    padding: 0;
    margin: 10px;
    width: 100%;
    height: 100%;
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
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .event .event-list {
    width: 100%;
    height: 100%;
  }
  .event .event-list img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .event .event-list p {
    font-size: 1rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #000;
    text-align: left;
    padding: 0;
  }
  .event .event-item {
    width: 100%;
    height: 400px;
    overflow-y: scroll;
  }
  .event .event-item .box {
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 10px;
    width: 100%;
  }
  .event .box .box-h {
    width: 80px;
    height: 100px;
  }
  .event .box .box-h img {
    width: 100%;
    height: 100%;
    background-position: center;
  }
  .event .box .box-b {
    width: 250px;
    height: 100px;
    padding: 0;
    margin: 0;
  }
  .event .box .box-b p {
    font-size: 0.9rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #000;
    text-align: left;
  }
  /* .col-md-12 .row {
    margin-bottom: 20px;
  }
  .col-md-12 .row .col-md-3 .card {
    margin: 10px;
  }
  .col-md-12 .row .col-md-3 .card-header .images {
    width: 100%;
    height: 150px;
    background: #fff;
  }
  .col-md-12 .row .col-md-3 .card-header .images img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .col-md-12 .row .col-md-3 .card-body {
    background: #fff;
    padding: 5px;
  }
  .col-md-12 .row .col-md-3 .card-body ul {
    padding: 0;
    margin: 0;
  }
  .col-md-12 .row .col-md-3 .card-body li {
    list-style: none;
  } */
}
</style>