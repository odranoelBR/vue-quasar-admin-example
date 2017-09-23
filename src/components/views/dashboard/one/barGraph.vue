<script>
import { Bar } from 'vue-chartjs'
export default Bar.extend({
  props: {
    data: { type: Array, require: true },
    labels: { type: Array, require: true }
  },
  data () {
    return {
      defaultOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            barThickness: 40
          }]
        }
      }
    }
  },
  watch: {
    data () {
      this.renderChart({ labels: this.labels, datasets: this.data })
    }
  }
})
</script>
