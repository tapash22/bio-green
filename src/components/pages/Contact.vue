<template>
  <div class="contact">
    <div class="image">
      <img src="../../assets/image/contact.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <h3>Contact Us</h3>
        <div
          class="col-md-6 text"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h4>
            <i class="fa fa-map-marker" aria-hidden="true"></i>Our Address
          </h4>
          <hr />
          <address>
            HOUSE NO: 27 (2nd Floor), ROAD NO: 05,<br />
            Nikunja 02, Khilkhet, Dhaka-1229, Bangladesh.
          </address>

          <h4 class="pt-3">Contact Info</h4>
          <hr />
          <address>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            info@biogreenint.com,<br />
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <a href="https://www.facebook.com/profile.php?id=100050555396675"
              >&nbsp; Bio-green</a
            >,<br />
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <a
              href="https://www.linkedin.com/company/biogreen-international-limited/?viewAsMember=true"
              >Bio-green</a
            >,<br />
            <i class="fa fa-twitter" aria-hidden="true"></i>
            twitter/bio-green<br />
            <i class="fa fa-mobile" aria-hidden="true"></i>&nbsp; +8801810084300
          </address>

          <h4 class="pt-3">
            <i class="fa fa-home" aria-hidden="true"></i>Ware House
          </h4>
          <hr />
          <address>
            Lotif Super Market, Borua Bazar,<br />
            Khilkhet, Dhaka 1229
          </address>
        </div>
        <div
          class="col-md-6"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div class="main">
            <img src="../../assets/image/contact_8a.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.contact {
  width: 100%;
  height: 100%;
  margin-top: 122px;
  padding: 0;
}
.image {
  width: 100%;
  height: 400px;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.contact .row {
  display: flex;
  justify-content: space-around;
}
.contact .row h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 5px;
}
.col-md-6 {
  padding-top: 10px;
  display: block;
  width: 50%;
  padding-bottom: 10px;
}
.text {
  padding-left: 50px;
}

.text hr {
  width: 180px;
  height: 3px;
  color: green;
}
.text h4 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  font-family: "Oswald", sans-serif;
  text-align: left;
}
.text h4 i {
  font-size: 2rem;
  font-weight: 700;
  padding: 5px;
  color: green;
}
.text address {
  padding: 5px;
  font-size: 1.1rem;
  font-weight: 500px;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: left;
}
.text address i {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px;
  color: green;
}
.text address a {
  color: #000;
  text-decoration: none;
}
.col-md-6 main {
  width: 100%;
  height: 100%;
}
.col-md-6 .main img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

@media only screen and (max-width: 767px) {
  .contact .row {
    display: flex;
    flex-direction: column;
  }
  .col-md-6 {
    padding-top: 10px;
    display: block;
    width: 100%;
    padding-bottom: 10px;
  }
  
}
</style>