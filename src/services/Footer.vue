<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 text">
          <h3>We <strong>are</strong></h3>
          <p>
            BioGreen International Limited is a World Class Animal Health Care
            Solution provider committed to deal with a wide range of world
            renowned products to market inside the Country through its own
            Distribution Network.
          </p>
        </div>
        <div class="col-md-4 link">
          <h3>Quick <strong>link</strong></h3>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/partners">Partners</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
          </ul>
        </div>
        <div class="col-md-4 add">
          <h3>
            Get in
            <strong style="font-size: 24px; font-weight: 700">touch</strong>
          </h3>
          <h5>BioGreen International Limited</h5>
          <address>
            <strong> House No:</strong> 27 (2nd Floor)<br />
            <strong> Road No: </strong>05, Nikunja 02, Khilkhet,<br />Dhaka-1229,
            Bangladesh
          </address>
          <address>
            <strong> Email :</strong> info@biogreenint.com<br />
            <strong> Phone :</strong> +8801810084300
          </address>
          <address>
            Lotif Super Market, Borua Bazar,<br />
            Khilkhet, Dhaka 1229
          </address>
          <div class="logo">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100050555396675"
                  ><i class="fa fa-facebook" aria-hidden="true"></i
                ></a>
                <a
                  href="https://www.linkedin.com/company/biogreen-international-limited/?viewAsMember=true"
                  ><i class="fa fa-linkedin" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="brand">
          <div class="col-md-12" style="display: flex">
            <p class="logos">&copy;BioGreen International Ltd</p>
            &nbsp;
            <p class="toto">Developed by</p>
            <p style="color: rgb(161, 57, 9)">&nbsp;ULTRAWAVE COMMUNICATIONS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  color: #000;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #546459;
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/footer.jpg");
  background-position: center;
  background-size: cover;
}
.container {
  width: 100%;
  height: 100%;
  padding: 0;
}
.row {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding-top: 9px;
}
.row .col-md-4 {
  text-align: center;
  padding: 10px;
}
h3 {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgb(5, 19, 82);
}
strong {
  font-size: 22px;
  font-weight: 700;
}
p {
  text-align: justify;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
}
.link {
  text-align: center;
}
.link ul {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: -20px;
}

.link ul li {
  padding: 2px;
  text-align: center;
  list-style: none;
  margin-left: 0;
}
.link a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  /* border-bottom: 2px solid green; */
}
  .add h5 {
    margin-left: -20px;
  }
.add address {
  text-align: left;
  padding: 0;
  margin-left: 50px;
  font-size: 0.9;
  font-weight: 500;
}
.add strong {
  font-size: 18px;
  font-weight: 500;
}
.add .logo {
  display: flex;
  justify-content: left;
  margin-left: 30px;
}
.logo ul {
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: right;
}
.logo ul li {
  list-style: none;
  text-align: right;
}
.logo li a {
  text-decoration: none;
}
.logo li a i {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  padding-left: 10px;
  padding-right: 10px;
}
.bottom {
  background: rgb(20, 1, 44);
  padding-top: 10px;
  padding: 0;
  position: relative;
}
.bottom .container .brand {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;

}
.bottom .container .brand .col-md-12 {
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
}
.bottom .container .brand .col-md-12 p {
    text-align: left;
    font-size: 0.7rem;
    font-weight: 500;
    color: rgb(161, 57, 9);
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .bottom .container .brand .col-md-12 .logos {
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
  }
  .bottom .container .brand .col-md-12 .toto {
    margin-top: -20px;
    font-size: 0.5rem;
  }

@media only screen and (max-width: 767px) {
  p {
    text-align: justify;
    padding: 40px;
    margin-top: -10px;
  }
  h3 {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgb(5, 19, 82);
  margin-left: -40px;
}
.link {
  text-align: center;
}
.link ul {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.link ul li {
  padding: 2px;
  text-align: center;
  list-style: none;
  margin-left: -50px;
}
.link a {
  text-decoration: none;
  color: rgb(8, 8, 255);
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  /* border-bottom: 2px solid green; */
}
  .add h5 {
    margin-left: -40px;
  }
  .add .logo {
  display: flex;
  justify-content: left;
  margin-left: 30px;
}
.logo ul {
  width: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.logo ul li {
  list-style: none;
  text-align: center;
  margin-left: -100px; 
   
}
.logo li a {
  text-decoration: none;
  padding: 0;
  margin: 2px;
}
.logo li a i {
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
  padding-left: 10px;
  padding-right: 10px;
}
  .bottom {
    background: rgb(20, 1, 44);
    padding-top: 10px;
    margin-left: -60px;
    padding: 0;
    position: relative;
  }
  .bottom .container .brand {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .bottom .container .brand .col-md-12 {
    padding: 5px;
    margin-left:10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .bottom .container .brand .col-md-12 p {
    text-align: left;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgb(161, 57, 9);
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .bottom .container .brand .col-md-12 .logos {
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
  }
  .bottom .container .brand .col-md-12 .toto {
    margin-top: -20px;
  }
}
</style>
