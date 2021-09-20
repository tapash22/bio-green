<template>
  <div class="blogpost">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <h3>{{blog.title}}</h3>
            <div class="image">
            <img :src="blog.image" />
            </div>
            <div class="text">
            <p><strong>Author: </strong> {{ blog.author }}<br>
            <i class="fa fa-calendar-check-o" aria-hidden="true"></i>{{ blog.mydate }}</p>
            </div>
            <div class="des">
            <p>{{ blog.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: [],
    };
  },

  created() {
    var docRef = db.collection("blogs").doc(this.id);
    docRef.get().then((doc) => {
      if (doc.exists) {
        this.blog = doc.data();
      } else {
        console.log("No such document!");
      }
    });
  },
};
</script>

<style scoped>
.blogpost{
  margin-top: 130px;
  width: 100%;
  height: 100%;
  padding: 0;
}
.row{
  padding: 0;
  margin: 0;
  widows: 100%;
  height: 100%;
  background: #fff;
}
.row .col-md-12{
  padding: 0;
  margin: 0;
}
.col-md-12 .box{
  padding: 10px;
  margin: 10px;
}
h3{
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 10px;
}
.image{
  width: 800px;
  height: 400px;
  padding: 0;
  margin:0;
}
.image img{
  width: 100%;
  height: 100%;
  padding: 10px;
}
.text{
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 0;
}
.text p{
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
}
.text p strong{
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0;
}
.text p i{
  font-size: 1.6rem;
  font-weight: 700;
  padding: 5px;
  color: rgb(30, 146, 15);
}
.des{
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.des p{
  font-size: 1rem;
  font-weight: 400;

}
</style>