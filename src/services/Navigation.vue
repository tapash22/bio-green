<template>
  <div class="navigation">
    <nav>
      <div class="info">
        <div>
          <ul>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>+8801810084300
            </li>
            <li>
              <i class="fa fa-envelope-o" aria-hidden="true"></i
              >info@biogreenint.com
            </li>
            <li>
              <i class="fa fa-map-marker" aria-hidden="true"></i>House No: 27 (2nd Floor)
            Road No: 05, Nikunja 02, Khilkhet,Dhaka-1229, Bangladesh
            </li>
          </ul>
        </div>
      </div>
      <div class="brand">
        <div>
          <img src="../assets/image/logo.png" />
        </div>
        <div class="login">
          <router-link to="/login"
            ><i class="fa fa-sign-in" aria-hidden="true"></i>login</router-link
          >
        </div>
      </div>
      <div class="navbar">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/photos">Photos</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li>
            <router-link to="/products">Products</router-link>
            <ul>
              <li><router-link to="/">Product1</router-link></li>
              <li><router-link to="/">Product2</router-link></li>
              <li><router-link to="/">Product3</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/partners">Partners</router-link>
            <ul>
              <li><router-link to="/">partner1</router-link></li>
              <li><router-link to="/">partner2</router-link></li>
              <li><router-link to="/">partner3</router-link></li>
            </ul>
          </li>
          <li><router-link to="/contact">ContactUs</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation {
  width: 100%;
  background: #fff;
  color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
  position: fixed;
}
nav {
  background: #1b1b1b;
  width: 100%;
}
nav .info {
  position: relative;
  display: flex;
  line-height: 30px;
  background: #1b1b1b;
  width: 100%;
}
.info ul {
  float: left;
  margin-left: 100px;
  position: relative;
  display: flex;
  padding-top: 5px;
}
.info ul li {
  display: inline;
  margin: 0 5px;
  font-size: 16px;
  font-weight: 500;
  list-style: none;
}
.info ul li i{
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
}

nav .brand {
  display: flex;
  justify-content: space-between;
  /* padding-left: 150px; */
  background: rgb(25, 4, 63);
  border-top: 1px solid #1b1b1b;
  border-bottom: 1px solid #1b1b1b;
}
.brand img {
  padding: 5px;
}

/* .brand i {
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
} */
.brand .login {
  margin-right: 50px;
  margin-top: 10px;
}
.brand .login a {
  font-size: 20px;
  font-weight: 700;
    font-family: "Oswald", sans-serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}
nav::after {
  content: " ";
  clear: both;
  display: table;
}
/* .navbar {
  overflow-x: hidden;
  overflow-y: hidden;
} */
.navbar ul {
  float: left;
  margin-left: 100px;
  margin-right: 0;
  position: relative;
}
.navbar ul li {
  display: inline-block;
  background: #1b1b1b;
  margin: 0 5px;
  list-style: none;
}
.navbar ul li a {
  color: #fff;
  text-decoration: none;
  line-height: 30px;
  font-size: 18px;
  padding: 8px 15px;
}

.navbar ul li a:hover,
.navbar ul li a.router-link-active {
  color: cyan;
  border-radius: 5px;
  box-shadow: 0 0 5px #33ffff, 0 0 5px #66ffff;
}
.navbar ul ul li a:hover {
  color: cyan;
  box-shadow: none;
}
.navbar ul ul {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: all 0.3s;
  margin-left: -30px;
  z-index: 1;
}
.navbar ul li:hover > ul {
  transform: translateY(15px);
  opacity: 1;
  visibility: visible;
}
.navbar ul ul li {
  margin: 0;
  padding: 0;
  float: none;
  display: list-item;
  border-bottom: 1px solid red;
  line-height: 50px;
}

@media only screen and (max-width: 767px) {
  .navigation {
    width: 100%;
    background: #fff;
    color: #fff;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
    position: fixed;
  }
  nav {
    background: #1b1b1b;
    width: 100%;
  }
  nav .info {
    position: relative;
    display: flex;
    flex-direction: column;
    line-height: 20px;
  }
  .info ul {
    float: left;
    margin-left: 25%;
    position: relative;
    margin-top: 10px;
    display: block;
  }
  .info ul li {
    display: flex;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
  .info ul li i,
  .login i {
    padding: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
  .info .login {
    margin-right: 0;
    margin-top: 5px;
    display: flex;
    justify-content: center;
  }
  .info .login a {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  nav .brand {
    display: block;
    padding-left: 20px;
    background: #fff;
    border-top: 1px solid #1b1b1b;
    border-bottom: 1px solid #1b1b1b;
  }
  .brand img {
    padding: 10px;
  }
  nav::after {
    content: " ";
    clear: both;
    display: table;
  }
  .navbar {
    display: inline-block;
    width: 100%;
    height: 100px;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .navbar ul {
    margin-left: -5%;
    margin-right: 10%;
    position: relative;
    display: flex;
  }
  .navbar ul li {
    background: #1b1b1b;
    margin: 0 5px;
    list-style: none;
    padding: 5px;
  }
  .navbar ul li a {
    color: #fff;
    text-decoration: none;
    line-height: 20px;
    font-size: 14px;
    padding: 8px 2px;
  }

  .navbar ul li a:hover,
  .navbar ul li a.router-link-active {
    color: cyan;
    border-radius: 5px;
    box-shadow: 0 0 5px #33ffff, 0 0 5px #66ffff;
  }
  .navbar ul ul li a:hover {
    color: cyan;
    box-shadow: none;
  }
  .navbar ul ul {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    transition: all 0.3s;
    margin-left: -20%;
  }
  .navbar ul li:hover > ul {
    transform: translateY(15px);
    opacity: 1;
    visibility: visible;
  }
  .navbar ul ul li {
    margin: 5px;
    padding: 0;
    float: none;
    display: list-item;
    border-bottom: 1px solid #000;
    line-height: 30px;
  }
}
</style>