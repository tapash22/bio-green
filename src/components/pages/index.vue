<template>
  <div class="panel panel-default">
    <div class="panel-heading" style="font-weight: bold">
      <span class="glyphicon glyphicon-align-justify"></span> All Resources
    </div>
    <div class="row" style="display: none">
      <div class="search-wrapper panel-heading col-sm-12">
        <input
          class="form-control"
          type="text"
          v-model="searchQuery"
          placeholder="Search"
        />
      </div>
    </div>
    <div class="panel-body" style="max-height: 400px; overflow-y: scroll">
      <table v-if="resources.length" class="table">
        <thead>
          <tr>
            <th>Resource</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredResources" :key="item">
            <td>
              <a v-bind:href="item.uri" target="_blank">{{ item.title }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg", "t"],
  name: "HellowWorld",
  data() {
    return {
      searchQuery: "a",
      resources: [
        { title: "aaa", uri: "aaaa.com", category: "a", icon: null },
        { title: "add", uri: "aaaa.com", category: "a", icon: null },
        { title: "aff", uri: "aaaa.com", category: "a", icon: null },
        { title: "bbb", uri: "bbbb.com", category: "b", icon: null },
        { title: "bdd", uri: "bbbb.com", category: "b", icon: null },
        { title: "bsb", uri: "bbbb.com", category: "b", icon: null },
        { title: "ccc", uri: "cccc.com", category: "c", icon: null },
        { title: "ddd", uri: "dddd.com", category: "d", icon: null },
      ],
    };
  },
  computed: {
    filteredResources() {
      console.log(this.$props);
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return item.title.startsWith(this.searchQuery);
        });
      } else {
        return this.resources;
      }
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
