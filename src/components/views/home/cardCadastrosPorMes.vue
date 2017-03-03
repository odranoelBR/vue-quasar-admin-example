<template>
  <div class="card bg-white animate-scale ">
    <div class="card-title bg-blue text-white">
      Cadastros por mês no ano escolhido - {{ano}}

      <q-fab icon="keyboard_arrow_left" direction="left" class="float-right" classNames="teal">
        <q-small-fab class="teal" @click.native="ano = '2016'" icon="">2016</q-small-fab>
        <q-small-fab class="teal" @click.native="ano = '2017'" icon="">2017</q-small-fab>
      </q-fab>
    </div>
    <div class="card-content ">
      <canvas id="cadastros-mes" ></canvas>
    </div>
  </div>
</template>

<script>
  //
  /* eslint-disable */
  import Chart from 'chart.js'
  export default {
    mounted () {
      this.getTotalAgrupadoPorMesNoAnoEscolhido()
    },
    computed: {
      nomeMeses (){
        return Object.keys(this.totalAgrupadoPorMes)
      },
      valoresAgrupados (){
        return Object.keys(this.totalAgrupadoPorMes).map(key => this.totalAgrupadoPorMes[key])
      },
      dados () {
        return {
          chart: '',
          labels: this.nomeMeses,
          datasets: [{
            data: this.valoresAgrupados,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192, 1)",
            borderColor: "rgba(75,192,192,1)",
            pointHitRadius: 10
          }]
        }
      }
    },
    watch: {
      totalAgrupadoPorMes () {
        this.criarChart()
      },
      ano () {
        this.getTotalAgrupadoPorMesNoAnoEscolhido()
        this.chart.destroy()

        this.criarChart()
      }
    },
    data () {
      return {
        ano: '2016',
        totalAgrupadoPorMes: {}
      }
    },
    methods: {
      getTotalAgrupadoPorMesNoAnoEscolhido () {
        let vm = this
        vm.$http.get(`pessoas/total-cadastro-agrupado-mes-por-ano/${this.ano}`)
          .then(function (response) {
            vm.totalAgrupadoPorMes = response.data
          })
      },
      criarChart () {
        var ctx = document.getElementById("cadastros-mes")
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.dados
        })
      }
    }
  }
</script>

<style>
</style>
