<template>
  <div class="blogpost">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <h3>{{ blog.btitle }}</h3>
            <div class="image">
              <img :src="blog.bimage" />
            </div>
            <div class="info">
              <p>
                <strong>Author: </strong> {{ blog.bauthor }}<br />
                <i class="fa fa-calendar-check-o" aria-hidden="true"></i
                >{{ blog.create_at }}
              </p>
            </div>
            <div class="des">
              <p>{{ blog.bdescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from '../apis/Blog';
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: [],
    };
  },

  created() {
    Blog.getBlogid(this.id).then((res) => {
      this.blog = res.data;
      console.log(this.blog);
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
  widows: 100%;
  height: 100%;
  background: #ffa6004f;
  padding: 10px;
  margin: 0;
}
.row .col-md-12 {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
}
.col-md-12 .box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.box h3 {
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 10px;
  color: #000;
}
.box .image {
  width: 100%;
  height: 400px;
  padding: 10px;
  margin: 0;
}
.image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.info {
  width: 100%;
  padding: 5px;
  margin: 5px;
}
.info p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
}
.info p strong {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0;
}
.info p i {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px;
  color: #000;
}
.des {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.des p {
  font-size: 1.1rem;
  font-weight: 500;
  color: #000;
  text-align: justify;
}

@media only screen and (max-width: 436px) {
  .blogpost {
    margin-top: 90px;
    width: 100%;
    height: auto;
    padding: 0;
  }
  .row {
    widows: 100%;
    height: 100%;
    background: #ffa6004f;
    padding: 0;
    margin: 5px;
  }
  .row .col-md-12 {
    padding: 0;
    margin: 0;
    width: 95%;
    height: 100%;
  }
  .col-md-12 .box {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .box h3 {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 10px;
    color: #000;
    text-align: left;
    width: 100%;
  }
  .box .image {
    width: 100%;
    height: 300px;
    padding: 10px;
    margin: 0;
  }
  .image img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .info {
    width: 100%;
    padding: 5px;
    margin: 5px;
  }
  .info p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
  }
  .info p strong {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0;
  }
  .info p i {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 5px;
    color: #000;
  }
  .des {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
  }
  .des p {
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
    text-align: justify;
  }
}
</style>