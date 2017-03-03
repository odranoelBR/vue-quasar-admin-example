<template>
  <div class="card bg-white animate-scale ">
    <div class="card-title bg-blue text-white">
      Quantidade de pessoas por bairro
      <q-fab icon="keyboard_arrow_left" direction="left" class="float-right" classNames="teal">
        <q-small-fab class="teal" @click.native="tipoGrafico = 'bar'" icon=""><i class="mdi mdi-chart-bar"></i></q-small-fab>
        <q-small-fab class="teal" @click.native="tipoGrafico = 'horizontalBar'" icon=""><i class="mdi mdi-chart-timeline"></i></q-small-fab>
      </q-fab>
    </div>
    <div class="card-content">
      <canvas id="pessoas-bairro"></canvas>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import Chart from 'chart.js'
  export default {
    mounted () {
      this.getBairrosAgrupados()
    },
    computed: {
      nomeBairros (){
        return Object.keys(this.bairrosAgrupados)
      },
      valoresPorBairro (){
        return Object.keys(this.bairrosAgrupados).map(key => this.bairrosAgrupados[key])
      },
      dados () {
        return {
          labels: this.nomeBairros,
          datasets: [{
            data: this.valoresPorBairro,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ]
          }]
        }
      }
    },
    watch: {
      bairrosAgrupados () {
        let ctx = document.getElementById("pessoas-bairro")
        this.chart = new Chart(ctx, {
          type: this.tipoGrafico,
          data: this.dados
        })
      },
      tipoGrafico () {
        let ctx = document.getElementById("pessoas-bairro")
        this.chart.destroy()
        this.chart = new Chart(ctx, {
          type: this.tipoGrafico,
          data: this.dados
        })
      }
    },
    data () {
      return {
        bairrosAgrupados: {},
        tipoGrafico: 'horizontalBar',
        chart: ''
      }
    },
    methods: {
      getBairrosAgrupados () {
        let vm = this
        vm.$http.get('/endereco/bairros-agrupados')
          .then(function (response) {
            vm.bairrosAgrupados = response.data
          })
      }
    }
  }
</script>

<style>
</style>
