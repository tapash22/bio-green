<template>
  <div class="contact">
    <div class="image">
      <img src="../../assets/image/contact.jpg" />
    </div>
    <h3>Contact Us</h3>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>Our Address</h4>
          <hr />
          <address>
            House No: 27 (2nd Floor), <br />Road No: 05, Nikunja 02,<br />
            Khilkhet, Dhaka-1229, Bangladesh.
          </address>
        </div>
        <div class="col-md-4">
          <h4>Contact Info</h4>
          <hr />
          <address>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            info@biogreenint.com<br />
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <a href="https://www.facebook.com/profile.php?id=100050555396675"
              >&nbsp; BioGreen</a
            ><br />
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <a
              href="https://www.linkedin.com/company/biogreen-international-limited/?viewAsMember=true"
              >BioGreen</a
            ><br />
            <i class="fa fa-mobile" aria-hidden="true"></i>&nbsp; +8801810084300
          </address>
        </div>
        <div class="col-md-4">
          <h4>Ware House</h4>
          <hr />
          <address>
            Lotif Super Market, Borua Bazar,<br />
            Khilkhet, Dhaka 1229
          </address>
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
  height: auto;
  margin-top: 120px;
  padding: 0;
  /* background:rgba(5, 19, 82, 0.596); */
}
.image {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 5px;
}

.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 5px;
  display: flex;
  background: #ffa6006c;
}
.col-md-4 {
  width: 33%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
h4 {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
  text-align: center;
}
address {
  padding-left: 25%;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
}
address i {
  font-size: 1.2rem;
  font-weight: 500;
  padding-right: 5px;
}
address a {
  font-size: 1rem;
  font-weight: 500;
  padding-left: 5px;
  text-decoration: none;
  color: #000;
}

@media only screen and (max-width: 992px) {
  .contact {
    width: 100%;
    height: auto;
    margin-top: 90px;
    padding: 0;
    /* background:rgba(5, 19, 82, 0.596); */
  }
  .image {
    width: 100%;
    height: 300px;
    padding: 0;
    margin: 0;
  }
  .image img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  h3 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 5px;
  }

  .row {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 5px;
    display: flex;
    background: #ffa6006c;
  }
  .col-md-4 {
    width: 33%;
    height: 100%;
    padding: 10px;
    margin: 0;
  }
  h4 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 5px;
    margin: 0;
    text-align: center;
  }
  address {
    padding-left: 25%;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    text-align: justify;
  }
  address i {
    font-size: 1.2rem;
    font-weight: 500;
    padding-right: 5px;
  }
  address a {
    font-size: 1rem;
    font-weight: 500;
    padding-left: 5px;
    text-decoration: none;
    color: #000;
  }
}

@media only screen and (max-width: 436px) {
  .contact {
    width: 100%;
    height: auto;
    margin-top: 90px;
    padding: 0;
    /* background:rgba(5, 19, 82, 0.596); */
  }
  .image {
    width: 100%;
    height: 300px;
    padding: 0;
    margin: 0;
  }
  .image img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  h3 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #000;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .contact .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin:0;
    justify-content: center;
  }
  .row .col-md-4 {
    width: 90%;
    padding: 0;
    margin: 5px;
    background: #fff;
  }
  address {
    padding-left: 15%;
  }
}
</style>