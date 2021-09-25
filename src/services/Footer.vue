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
          <h3>Get in <strong>touch</strong></h3>
          <address>
            <strong> House No:</strong> 27 (2nd Floor)<br />
            <strong> Road No: </strong>, Nikunja 02, Khilkhet,<br />Dhaka-1229,
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
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="brand">
          <div class="col-md-8" style="display: flex">
            <p>All right reserved in &copy;BioGreen</p>
            &nbsp;<img src="../assets/image/uv.png" style="" />
          </div>
          <div class="col-md-4">
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
  text-align: left;
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
  justify-content: space-between;
}
.bottom .container .brand .col-md-8 {
  padding: 5px;
  margin: 5px;
}
.bottom .container .brand .col-md-8 p {
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(119, 48, 15);
}
.bottom .container .brand .col-md-8 img {
  width: 150px;
  height: 50px;
  margin-top: -10px;
}
.bottom .container .brand .col-md-4 {
  padding: 5px;
  margin: 5px;
}
.bottom .container .brand .col-md-4 ul {
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: right;
}
.bottom .container .brand .col-md-4 ul li {
  list-style: none;
  text-align: right;
}
.bottom .container .brand .col-md-4 li a {
  text-decoration: none;
}
.bottom .container .brand .col-md-4 li a i {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  padding-left: 10px;
  padding-right: 10px;
}
.bottom .container .brand .col-md-4 li a i:hover {
  cursor: pointer;
  color: #fff;
}

@media only screen and (max-width: 767px) {
  p {
    text-align: left;
    padding: 20px;
  }
  .link ul li {
    padding: 2px;
    text-align: left;
    list-style: none;
    margin-left: 50px;
  }
  .link a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 2px solid green;
    text-align: left;
  }
}
</style>