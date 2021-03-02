<template>
  <div>
    <div class="row q-col-gutter-sm">
      <div class="col-lg-3 col-xs-12 col-sm-6 col-md-3">
        <card-total
          title-class="bg-secondary"
          icon="fa fa-envelope"
          titulo="Posts"
          :conteudo="totalPosts"
        />
      </div>
      <div class="col-lg-3 col-xs-12 col-sm-6 col-md-3">
        <card-total
          title-class="bg-secondary"
          icon="fa fa-comments"
          titulo="Comments"
          :conteudo="totalComments"
        />
      </div>
      <div class="col-lg-3 col-xs-12 col-sm-6 col-md-3">
        <card-total
          title-class="bg-accent"
          icon="fa fa-tasks"
          titulo="Tasks"
          :conteudo="totalTodos"
        />
      </div>
      <div class="col-lg-3 col-xs-12 col-sm-6 col-md-3">
        <card-total
          title-class="bg-accent"
          icon="fa fa-amilia"
          titulo="Static"
          :conteudo="1200"
        />
      </div>
    </div>
    <div class="row q-col-gutter-sm">
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <q-card class="bg-white ">
          <q-card-section>
            <bar-graph
              :data="dataForGraph"
              :labels="labelsForGraph"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <q-card class="bg-white ">
          <q-card-section>
            <todo-list :todos="todos" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <card-server-log :data="logData" />
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import CardTotal from "components/dashboard/CardTotal.vue"
import BarGraph from "components/dashboard/BarGraph.vue"
import TodoList from "components/dashboard/TodoList.vue"
import CardServerLog from "components/dashboard/CardServerLog.vue"
import { mapActions } from "vuex"
import { mapFields } from 'vuex-map-fields'
export default {
  name: "DashboardOne",
  components: {
    CardTotal, BarGraph, TodoList, CardServerLog
  },
  data: () => ({
    labelsForGraph: ["Posts", "Comments", "Todos"],
    logData: {
      id: 16828,
      error: [{}, {}],
      warning: [{}, {}],
      solved: [{}],
      dtEnvio: "2019-02-06 15:03:37",
      serverId: 'e96f3416-76b7-11eb-9439-0242ac130002'
    }
  }),
  computed: {
    ...mapFields(['posts', 'todos', 'comments']),
    totalPosts () {
      return this.posts.length
    },
    totalTodos () {
      return this.todos.length
    },
    totalComments () {
      return this.comments.length
    },
    dataForGraph () {
      return [
        { label: "Posts", backgroundColor: "#2196F3", data: [this.totalPosts] },
        { label: "Todos", backgroundColor: "#D81B60", data: [this.totalTodos] },
        { label: "Comments", backgroundColor: "#21BA45", data: [this.totalComments] }
      ]
    }
  },
  created () {
    this.fetchComments()
    this.fetchTodos()
  },
  methods: {
    ...mapActions(['fetchComments', 'fetchTodos'])
  }
}
</script>
<style scoped></style>
