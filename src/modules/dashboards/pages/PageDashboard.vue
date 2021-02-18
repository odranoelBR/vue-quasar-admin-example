<template>
  <div>
    <div class="row q-col-gutter-sm">
      <div class="col">
        <card-total
          title-class="bg-secondary"
          icon="fa fa-envelope"
          titulo="Posts"
          :conteudo="totalPosts"
        />
      </div>
      <div class="col-3">
        <card-total
          title-class="bg-secondary"
          icon="fa fa-comments"
          titulo="Comments"
          :conteudo="totalComments"
        />
      </div>
      <div class="col-3">
        <card-total
          title-class="bg-accent"
          icon="fa fa-tasks"
          titulo="Tasks"
          :conteudo="totalTodos"
        />
      </div>
      <div class="col-3">
        <card-total
          title-class="bg-accent"
          icon="fa fa-amilia"
          titulo="Static"
          :conteudo="1200"
        />
      </div>
    </div>
    <div class="row q-col-gutter-sm">
      <div class="col-6">
        <q-card class="bg-white ">
          <q-card-section>
            <bar-graph
              :data="dataForGraph"
              :labels="labelsForGraph"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card class="bg-white ">
          <q-card-section>
            <todo-list :todos="todos" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import CardTotal from "components/dashboard/CardTotal.vue"
import BarGraph from "components/dashboard/BarGraph.vue"
import TodoList from "components/dashboard/TodoList.vue"
import { mapActions } from "vuex"
import { mapFields } from 'vuex-map-fields'
export default {
  name: "DashboardOne",
  components: {
    CardTotal, BarGraph, TodoList
  },
  data: () => ({
    labelsForGraph: ["Posts", "Comments", "Todos"]
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
