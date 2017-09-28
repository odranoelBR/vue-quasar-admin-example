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
        <ball-card icon="fa-id-card-o" icon-size="38px" title="User Profile" img-path="statics/profile.jpg">
          <div slot="content">
            <span class="text-secondary">Email</span>
            <p class="light-paragraph">BeccaLins@gmail.com</p>
            <span class="text-secondary">City</span>
            <p class="light-paragraph">San Francisco</p>
            <span class="text-secondary">State</span>
            <p class="light-paragraph">CA</p>

            <div class="row justify-center xs-gutter social">
              <div class="col">
                <q-btn small outline color="red">
                  <q-icon name="fa-google-plus"></q-icon>
                </q-btn>
              </div>
              <div class="col">
                <q-btn small outline color="blue-4">
                  <q-icon name="fa-twitter"></q-icon>
                </q-btn>
              </div>
              <div class="col">
                <q-btn small outline color="blue-10">
                  <q-icon name="fa-facebook"></q-icon>
                </q-btn>
              </div>
            </div>
          </div>
        </ball-card>
      </div>
      <div class="col-3">
        <ball-card icon="fingerprint" icon-size="48px" title="Avaliar datiloscopia"></ball-card>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import CardTotal from './cardTotal.vue'
import BarGraph from './barGraph'
import BallCard from './cardBall.vue'
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
<style scoped>
.social button {
  min-width: 58px;
}
</style>
