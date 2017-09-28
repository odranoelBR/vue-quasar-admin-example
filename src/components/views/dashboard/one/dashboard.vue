<template>
  <div>
    <div class="row ">
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-positive " icon="fa-envelope" titulo="Posts" :conteudo="totalPosts"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-red " icon="fa-comments-o" titulo="Comments" :conteudo="totalComments"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-purple" icon="fa-tasks" titulo="Tasks" :conteudo="totalTodos"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-orange" icon="fa-yelp" titulo="Static" :conteudo="1200"></card-total>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <q-card class="bg-white ">
          <q-card-main>
            <bar-graph :data="dataForGraph" :labels="labelsForGraph"> </bar-graph>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-3">
        <ball-card icon="fa-envelope" icon-size="38px" padding="8px" margin="15px" title="Dados de imagens"></ball-card>
      </div>
      <div class="col-3">
        <ball-card icon="fingerprint" icon-size="48px" padding="2px" margin="11px" title="Avaliar datiloscopia"></ball-card>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import CardTotal from './cardTotal.vue'
import BarGraph from './barGraph'
import BallCard from './ballCard.vue'
export default {
  name: 'DashboardOne',
  components: {
    CardTotal, BarGraph, BallCard
  },
  mounted () {
    // Axios.all not working
    Promise.all([
      this.$http.jsonplaceholder.get('posts'),
      this.$http.jsonplaceholder.get('comments'),
      this.$http.jsonplaceholder.get('todos')
    ])
      .then(response => {
        this.totalPosts = response[0].data.length
        this.totalComments = response[1].data.length
        this.totalTodos = response[2].data.length
      })
  },
  data () {
    return {
      labelsForGraph: ['Posts', 'Comments', 'Todos'],
      totalPosts: 0,
      totalComments: 0,
      totalTodos: 0
    }
  },
  computed: {
    dataForGraph () {
      return [
        { label: 'Posts', backgroundColor: '#2196F3', data: [this.totalPosts] },
        { label: 'Todos', backgroundColor: '#D81B60', data: [this.totalTodos] },
        { label: 'Comments', backgroundColor: '#21BA45', data: [this.totalComments] }
      ]
    }
  }
}
</script>
<style>

</style>
