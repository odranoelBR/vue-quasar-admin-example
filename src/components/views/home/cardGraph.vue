<template>
  <div class="card bg-white animate-scale ">
    <div class="card-title bg-teal text-white">
      {{cardTitle}}
      <q-fab icon="keyboard_arrow_left" direction="left" class="float-right" classNames="primary">
        <q-small-fab class="teal" @click.native="type = 'bar'" icon=""><i class="mdi mdi-chart-bar"></i></q-small-fab>
        <q-small-fab class="teal" @click.native="type = 'horizontalBar'" icon=""><i class="mdi mdi-chart-timeline"></i></q-small-fab>
      </q-fab>
    </div>
    <div class="card-content">
      <canvas id="graph" v-cloak="data"></canvas>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import Chart from 'chart.js'
  export default {
    props: {
      data: {
        type: Object,
        required: true
      },
      cardTitle: {
        default () { return 'Graph'}
      }
    },
    computed: {
      dataForGraph () {
        const values = Object.values(this.data)
        return {
          labels: Object.keys(this.data),
          datasets: [{
            data: values, //Object.values(this.data),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ]
          }]
        }
      }
    },
    watch: {
      data () {
        let ctx = document.getElementById("graph")
        this.chart = new Chart(ctx, {
          type: this.type,
          data: this.dataForGraph
        })
      },
      type () {
        let ctx = document.getElementById("graph")
        this.chart.destroy()
        this.chart = new Chart(ctx, {
          type: this.type,
          data: this.dataForGraph
        })
      }
    },
    data () {
      return {
        type: 'horizontalBar',
        chart: ''
      }
    }
  }
</script>

<style>
</style>
