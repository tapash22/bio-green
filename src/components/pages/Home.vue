<template>
  <div class="home">
    <Slider />
    <div class="container">
      <div class="row">
        <h3>Our product</h3>
        <p>We deliver performances rather just a product to your business</p>
        <div class="col-md-12 product">
          <div class="row2">
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <div class="to"></div>
                  <div class="too">
                    <div class="triangle-down"></div>
                    <div class="triangle-down1"></div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="img">
                    <img src="../../assets/image/ori.png" />
                  </div>
                </div>
                <div class="card-footer">
                  <div class="name">Name</div>
                  <div class="detail"><strong>$</strong>12</div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <div class="to"></div>
                  <div class="too">
                    <div class="triangle-down"></div>
                    <div class="triangle-down1"></div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="img">
                    <img src="../../assets/image/ori.png" />
                  </div>
                </div>
                <div class="card-footer">
                  <div class="name">Name</div>
                  <div class="detail"><strong>$</strong>12</div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <div class="to"></div>
                  <div class="too">
                    <div class="triangle-down"></div>
                    <div class="triangle-down1"></div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="img">
                    <img src="../../assets/image/ori.png" />
                  </div>
                </div>
                <div class="card-footer">
                  <div class="name">Name</div>
                  <div class="detail"><strong>$</strong>12</div>
                </div>
              </div>
            </div>
          </div>
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

      <div
        class="row"
        style="
          width: 100%;
          height: 100%;
          padding-top: 50px;
          margin-bottom: 20px;
        "
      >
        <div class="col-md-12" style="width: 100%; height: 100%">
          <Carousel />
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
.col-md-4 .card {
  padding: 0;
  margin: 0;
}
.card-header {
  padding: 0;
  left: 0;
  top: 0;
  background: rgb(240, 237, 237);
  border: none;
}
.to {
  width: 30px;
  height: 40px;
  background: #000;
  margin-left: 20px;
}
.too {
  margin-left: 20px;
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
}
.triangle-down {
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 15px solid transparent;
  border-top: 30px solid #000;
}
.triangle-down1 {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 0px solid transparent;
  border-top: 30px solid #000;
}
.card-body {
  background: rgb(240, 237, 237);
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
}
.card-body .img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 5px;
  border: 5px solid #fff;
}
.img img {
  width: 100%;
  height: 100%;
  background-position: center;
}
.card-footer {
  padding: 0;
  border: none;
  background: rgb(240, 237, 237);
  display: flex;
  flex-direction: column;
}
.name {
  float: left;
  font-size: 18px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  border-bottom: 2px solid rgba(24, 100, 5, 0.87);
  padding-left: 10px;
}
.detail {
  text-align: right;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  font-family: "Oswald", sans-serif;
  padding-right: 20px;
}
.detail strong {
  font-size: 24px;
  font-weight: 600;
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
  .col-md-12 .row {
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
  }
}
</style>