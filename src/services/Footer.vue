<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="info">
            <h3>We are</h3>
            <p>
              BioGreen International Limited is a World Class Animal Health Care
              Solution provider committed to deal with a wide range of world
              renowned products to market inside the Country through its own
              Distribution Network.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="link">
            <h3>Quick link</h3>
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
        </div>
        <div class="col-md-4">
          <div class="add">
            <h3>Get in touch</h3>
            <address>
              <h5>BioGreen International Limited</h5>
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
    </div>
    <div class="bottom">
      <div class="container">
        <div class="brand">
          <div class="col-md-12">
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
  width: 100%;
  height: auto;
  background-image: url("../assets/image/footer.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
}
.row {
  width: 100%;
  height: auto;
  display: flex;
  padding: 0;
  margin: 0;
}
.row .col-md-4 {
  width: 33%;
  padding: 0;
  margin: 0;
}
h3 {
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
}
.col-md-4 .info {
  width: 100%;
  padding: 10px;
  margin: 0;
}
.info p {
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
}
.col-md-4 .link {
  width: 100%;
  padding: 10px;
  margin: 0;
}
.link ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.link ul li {
  font-size: 1.2rem;
  font-weight: 500;
  color: blue;
  list-style: none;
  text-align: center;
  text-decoration: none;
}

.col-md-4 .add {
  width: 100%;
  padding: 10px;
  margin: 0;
}

.add .logo {
  width: 100%;
  padding: 0;
  margin: 0;
}
.logo ul {
  padding: 0;
  margin: 0;
  display: flex;
}
.logo ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.logo ul li a {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  text-decoration: none;
}

.bottom {
  width: 100%;
  background: #000;
  padding: 0;
  margin: 0;
}
.bottom .brand {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.bottom .brand .logos {
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  padding: 0;
  margin: 0;
  color: #fff;
}
.bottom .brand .toto {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  text-align: center;
  color: #fff;
  margin-top: -20px;
}
.bottom .brand p {
  text-align: center;
  font-size: 0.7rem;
  font-weight: 500;
}

@media only screen and (max-width: 436px) {
  .footer {
    color: #000;
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    background-image: url("../assets/image/footer.jpg");
    background-position: center;
    background-size: cover;
    position: relative;
  }
  .row {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  .row .col-md-4 {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .col-md-4 .info {
    width: 100%;
    padding: 10px;
    margin-left: -20px;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
  }
  .info p {
    font-size: 1rem;
    font-weight: 500;
    text-align: justify;
    padding: 20px;
  }
  .col-md-4 .link {
    width: 100%;
    padding: 0;
    margin-left: -20px;
  }
  .col-md-4 .link ul {
    padding: 0;
    margin: 0;
    display: flex;
  }
  .col-md-4 .link ul li {
    font-size: 1.2rem;
    font-weight: 500;
    color: blue;
    list-style: none;
    text-align: center;
    text-decoration: none;
  }

  .col-md-4 .add {
    width: 100%;
    padding: 0;
    margin-left: -20px;
  }
  .add address{
    padding-left: 30px;
  }

  .add .logo {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .add .logo ul {
    padding:0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .add .logo ul li {
    list-style: none;
    padding: 0px;
    margin: 0;
  }
  .add .logo ul li a {
    padding: 5px;
    margin: 5px;
  }
  .add.logo ul li a i {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding: 5px;
  }

  .bottom {
    width: 100%;
    background: #000;
    padding: 0;
    margin: 0;
  }
  .bottom .brand {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .bottom .brand .logos {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    padding: 0;
    margin: 0;
    color: #fff;
  }
  .bottom .brand .toto {
    font-size: 0.7rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
    text-align: center;
    color: #fff;
    margin-top: -20px;
  }
  .bottom .brand p {
    text-align: center;
    font-size: 0.7rem;
    font-weight: 500;
  }
}
</style>
