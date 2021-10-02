<template>
  <div class="blogpost">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <h3>{{ blog.title }}</h3>
          <div class="image">
            <img :src="blog.image" />
          </div>
          <div class="text">
            <p>
              <strong>Author: </strong> {{ blog.author }}<br />
              <i class="fa fa-calendar-check-o" aria-hidden="true"></i
              >{{ blog.mydate }}
            </p>
          </div>
          <div class="des">
            <p>{{ blog.description }}</p>
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

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.blogpost {
  margin-top: 120px;
  width: 100%;
  padding: 0;
}
.row {
  margin-left: 100px;
  margin-right: 100px;
  widows: 100%;
  height: 100%;
  background: #ffa6004f;
}
.row .col-md-12 {
  padding: 0;
  margin: 0;
}
.col-md-12 .box {
  padding: 10px;
  margin: 10px;
}
h3 {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 10px;
  color: #000;
}
.image {
  width: 1100px;
  height: 400px;
  padding: 0;
  margin: 0;
}
.image img {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.text {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 0;
}
.text p {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
}
.text p strong {
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0;
}
.text p i {
  font-size: 1.6rem;
  font-weight: 700;
  padding: 5px;
  color: #000;
}
.des {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.des p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: justify;
}

@media only screen and (max-width: 767px) {
  .blogpost {
    margin-top: 100px;
    width: 100%;
    padding: 0;
  }
  .row {
    margin-left: 10px;
    margin-right: 10px;
    widows: 100%;
    height: 100%;
    background: #ffa6004f;
  }
  .row .col-md-12 {
    padding: 0;
    margin: 0;
  }
  .col-md-12 .box {
    padding: 10px;
    margin: 10px;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 10px;
    color: #000;
  }
  .image {
    width: 350px;
    height: 300px;
    padding: 0;
    margin: 0;
  }
  .image img {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .text {
    width: 100%;
    height: 100px;
    padding: 10px;
    margin: 0;
  }
  .text p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
  }
  .text p strong {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 0;
  }
  .text p i {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 5px;
    color: #000;
  }
  .des {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 0;
  }
  .des p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
    text-align: justify;
  }
}
</style>