<template>
  <div class="partners">
    <div class="image">
      <img src="../../assets/image/partner.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <h3>Local Partner</h3>
        <div class="col-md-6">
          <div class="left">
            <img src="../../assets/image/company.jpg" />
          </div>
          <div class="right">
            <h4>Company name</h4>
            <ul>
              <li>from</li>
              <li>type</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quibusdam suscipit at dolor nihil enim a consectetur assumenda,
              aperiam, ipsa dolore voluptatem fuga odio obcaecati odit velit
              corrupti beatae eos
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="left">
            <img src="../../assets/image/company.jpg" />
          </div>
          <div class="right">
            <h4>Company name</h4>
            <ul>
              <li>from</li>
              <li>type</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quibusdam suscipit at dolor nihil enim a consectetur assumenda,
              aperiam, ipsa dolore voluptatem fuga odio obcaecati odit velit
              corrupti beatae eos
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="left">
            <img src="../../assets/image/company.jpg" />
          </div>
          <div class="right">
            <h4>Company name</h4>
            <ul>
              <li>from</li>
              <li>type</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quibusdam suscipit at dolor nihil enim a consectetur assumenda,
              aperiam, ipsa dolore voluptatem fuga odio obcaecati odit velit
              corrupti beatae eos
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="left">
            <img src="../../assets/image/company.jpg" />
          </div>
          <div class="right">
            <h4>Company name</h4>
            <ul>
              <li>from</li>
              <li>type</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quibusdam suscipit at dolor nihil enim a consectetur assumenda,
              aperiam, ipsa dolore voluptatem fuga odio obcaecati odit velit
              corrupti beatae eos
            </p>
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
.partners {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 160px;
}
.image {
  width: 100%;
  height: 300px;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.row {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
  margin: 0;
}
.row h3 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
.col-md-6{
  padding: 0;
  margin: 10px;
  width: 500px;
  height: 100%;
  display: flex;
  border: 1px solid green;
}
.col-md-6 .left{
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
}
.left img{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.right{
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
  background: black;
}
.right h4{
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding: 5px;
}
.right ul{
  display: block;
  padding: 0;
  margin: 0;
  background: rgb(2, 17, 59);
}
.right ul li{
  list-style: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}
.right p{
  padding: 5px;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
}
</style>