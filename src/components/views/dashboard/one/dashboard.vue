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
    </div>
    <div class="row">
      <q-card class="bg-white ">
        <q-card-main>
          <bar-graph :data="dataForGraph" :labels="labelsForGraph"> </bar-graph>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>
<script type="text/javascript">
import CardTotal from './cardTotal.vue'
import BarGraph from './barGraph'
export default {
  name: 'DashboardOne',
  components: {
    BarGraph,
    CardTotal
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
      return [this.totalPosts, this.totalTodos, this.totalComments]
    }
  }
}
</script>
<style>

</style>
