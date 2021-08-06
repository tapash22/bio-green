<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <h3>10</h3>
          <h1>Employe</h1>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h3>15</h3>
          <h1>Partners</h1>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h3>51</h3>
          <h1>Products</h1>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h3>05</h3>
          <h1>Grand Event</h1>
        </div>
      </div>
    </div>

    <div class="row2">
      <div class="col-md-6">
        <apexchart
          width="500"
          type="donut"
          :options="options1"
          :series="series1"
        ></apexchart>
      </div>
      <div class="col-md-6">
        <apexchart
          width="500"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "dashboard",
  data: function () {
    return {
      options1: {},
      series1: [10, 15, 51, 5],
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        },
      },
      series: [
        {
          name: "series-1",
          data: [20, 30, 40, 20, 50, 70, 30, 65],
        },
      ],
    };
  },

   mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 120px;
  background: #fff;
}
.row {
  width: 100%;
  height: 200px;
  padding: 0;
  margin-left: 25%;
}
.col-md-3 {
  width: 260px;
}
.card h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: blue;
  text-align: right;
  padding: 10px;
}

.card h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #000;
  text-align: left;
  padding: 10px;
}
.row2 {
  width: 100%;
  padding: 0;
  margin-left: 25%;
  display: flex;
}

</style>