<template>
  <div>
    <div class="row q-gutter-sm">
      <div class="col">
        <card-total
          titleClass="bg-secondary"
          icon="fa fa-envelope"
          titulo="Posts"
          :conteudo="totalPosts"
        ></card-total>
      </div>
      <div class="col-3">
        <card-total
          titleClass="bg-secondary"
          icon="fa fa-comments"
          titulo="Comments"
          :conteudo="totalComments"
        ></card-total>
      </div>
      <div class="col-3">
        <card-total
          titleClass="bg-accent"
          icon="fa fa-tasks"
          titulo="Tasks"
          :conteudo="totalTodos"
        ></card-total>
      </div>
      <div class="col-3">
        <card-total
          titleClass="bg-accent"
          icon="fa fa-amilia"
          titulo="Static"
          :conteudo="1200"
        ></card-total>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-5">
        <q-card class="bg-white ">
          <q-card-section>
            <bar-graph :data="dataForGraph" :labels="labelsForGraph">
            </bar-graph>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import CardTotal from "components/dashboard/CardTotal.vue";
import BarGraph from "components/dashboard/BarGraph.vue";
import { mapGetters } from "vuex";
import { getComments, getTodos } from "src/boot/axios.js";
export default {
  name: "DashboardOne",
  components: {
    CardTotal,
    BarGraph
  },
  mounted() {
    Promise.all([getComments(), getTodos()]).then(response => {
      this.totalComments = response[0].data.length;
      this.totalTodos = response[1].data.length;
    });
  },
  data() {
    return {
      labelsForGraph: ["Posts", "Comments", "Todos"],
      totalComments: 0,
      totalTodos: 0
    };
  },
  computed: {
    ...mapGetters("app", ["getPosts"]),
    totalPosts() {
      return this.getPosts.length;
    },
    dataForGraph() {
      return [
        { label: "Posts", backgroundColor: "#2196F3", data: [this.totalPosts] },
        { label: "Todos", backgroundColor: "#D81B60", data: [this.totalTodos] },
        {
          label: "Comments",
          backgroundColor: "#21BA45",
          data: [this.totalComments]
        }
      ];
    }
  }
};
</script>
<style scoped></style>
