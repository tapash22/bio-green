<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 text">
          <h3>We <strong>are</strong></h3>
          <p>
            Bio-green international Limited is a World Class Animal Health Care
            Solution provider committed to deal with a wide range of world
            renowned products to market inside the Country through its own
            Distribution Network.inside the Country through its own Distribution
            Network.inside the Country through its own Distribution Network.
          </p>
        </div>
        <div class="col-md-4 link">
          <h3>Quick <strong>link</strong></h3>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/photos">Gallery</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/partners">Partners</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-md-4 add">
          <h3>Get in <strong>touch</strong></h3>
          <address>
            House No: 27 (2nd Floor)<br />
            Road No: 05, Nikunja 02, Khilkhet,<br>Dhaka-1229, Bangladesh
          </address>
          <address>
            <strong> Email :</strong> info@biogreenint.com<br />
            <strong> Phone :</strong> +8801810084300
          </address>
          <address>
            Lotif Super Market, Borua Bazar,<br> Khilkhet, Dhaka 1229
          </address>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="col-md-8">
          <p>All right reserved in &copy;UltraWave</p>
        </div>
        <div class="col-md-4">
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100050555396675"
                ><i class="fa fa-facebook" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/biogreen-international-limited/?viewAsMember=true"
                ><i class="fa fa-linkedin" aria-hidden="true"></i
              ></a>
            </li>
            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #1b1b1b;
  width: 100%;
  height: 100%;
      background-image: url(../assets/image/foot.jpg);
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
  padding-top: 10px;
  
}
.row .col-md-4 {
  text-align: center;
  padding: 10px;
}
h3 {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
strong {
  font-size: 22px;
  font-weight: 500;
}
p {
  text-align: left;
}

/* }
ul li {
  list-style: none;
}
ul li a {
  color: #fff;
  text-decoration: none;
} */
.link {
  text-align: center;
}
.link ul{
display: flex;
flex-direction: column;
text-align: center;
}

.link ul li{
  padding: 2px;
    text-align: center;
    list-style: none;
}
.link a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 3px solid green;
}
.add address {
  text-align: left;
  padding: 0;
  margin-left: 50px;
}
.add strong {
  font-size: 18px;
  font-weight: 500;
}
.bottom {
  background: #000;

  padding-top: 10px;
  padding: 0;
}
.bottom .container {
  padding: 0;
  display: flex;
  justify-content: space-around;
  background: #000;
}

.bottom .col-md-8 p {
  padding-top: 10px;
}

.bottom .col-md-4 ul {
  display: flex;
  float: right;

  padding: 10px;
}
.bottom .col-md-4 li i {
  font-size: 1.5rem;
  font-weight: 500;
  padding-right: 20px;
}
.bottom .col-md-4 li i:hover {
  color: cyan;
}
@media only screen and (max-width: 767px) {
  p {
    text-align: left;
    padding: 20px;
  }
.link li{
  padding: 2px;
    text-align: left;
}
.link a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 3px solid green;
  text-align: left;
}
}
</style>