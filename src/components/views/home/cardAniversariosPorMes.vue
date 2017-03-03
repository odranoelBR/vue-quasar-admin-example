<template>
  <div class="card bg-white animate-scale ">
    <div class="card-title bg-blue text-white">
      Quantidade de Aniversariantes por mês
      <q-fab icon="keyboard_arrow_left" direction="left" class="float-right" classNames="teal">
        <q-small-fab class="teal" @click.native="tipoGrafico = 'bar'" icon=""><i class="mdi mdi-chart-bar"></i></q-small-fab>
        <q-small-fab class="teal" @click.native="tipoGrafico = 'horizontalBar'" icon=""><i class="mdi mdi-chart-timeline"></i></q-small-fab>
      </q-fab>
    </div>
    <div class="card-content">
      <canvas id="aniversarios-mes"></canvas>
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
        let bairros = []
        for (let item of Object.keys(this.bairrosAgrupados)) {
          bairros.push(format(new Date(item), 'MMM', {locale: ptLocale}))
        }
        return bairros
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
              'rgba(255, 159, 64, 1)',
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
        this.criarChart()
      },
      tipoGrafico () {
        this.chart.destroy()
        this.criarChart()
      }
    },
    data () {
      return {
        bairrosAgrupados: {},
        tipoGrafico: 'bar',
        chart: ''
      }
    },
    methods: {
      getBairrosAgrupados () {
        let vm = this
        vm.$http.get('/relatorio/aniversariantes-mes')
          .then(function (response) {
            vm.bairrosAgrupados = response.data
          })
      },
      criarChart () {
        let ctx = document.getElementById("aniversarios-mes")
        this.chart = new Chart(ctx, {
          type: this.tipoGrafico,
          data: this.dados
        })
      }
    }
  }
</script>

<style>
</style>
