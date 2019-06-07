<template>
  <card-ball
    icon="fa-id-card-o"
    icon-size="36px"
    title="Exemple Two - Simple drag and drop kanban"
  >
    <div
      slot="content"
      class="row wrap xs-gutter"
    >
      <div class="col">
        <todo-column ref="todoColumn" />
      </div>
      <div class="col">
        <doing-column ref="doingColumn" />
      </div>
      <div class="col">
        <done-column ref="doneColumn" />
      </div>
    </div>
  </card-ball>
</template>
<script>
import Dragula from "dragula/dragula";
import todoColumn from "./todoColumn.vue";
import doingColumn from "./doingColumn.vue";
import doneColumn from "./doneColumn.vue";
export default {
  components: {
    todoColumn,
    doingColumn,
    doneColumn
  },
  data() {
    return {
      dragula: ""
    };
  },
  mounted() {
    let containers = [
      this.$refs.todoColumn.$refs.todo,
      this.$refs.doingColumn.$refs.doing,
      this.$refs.doneColumn.$refs.done
    ];

    this.dragula = Dragula(containers, {
      moves: function(el, container, handle) {
        return handle.classList.contains("handle");
      }
    });
  }
};
</script>
<style scoped></style>
