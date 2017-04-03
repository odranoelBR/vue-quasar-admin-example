<template>
  <div class="card">
    <div class="card-title bg-teal text-white">
      Exemple Two - Simple drag and drop kanban
    </div>
    <div class="card-content bg-white">
      <div class="flex wrap gutter">
        <div class="auto">
          <todo-column ref="todoColumn"></todo-column>
        </div>
        <div class="auto">
          <doing-column ref="doingColumn"></doing-column>
        </div>
        <div class="auto">
          <done-column ref="doneColumn"></done-column>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Dragula from 'dragula/dragula'
  import todoColumn from './todoColumn.vue'
  import doingColumn from './doingColumn.vue'
  import doneColumn from './doneColumn.vue'
  export default {
    mounted () {
      let containers = [
        this.$refs.todoColumn.$refs.todo,
        this.$refs.doingColumn.$refs.doing,
        this.$refs.doneColumn.$refs.done
      ]

      this.dragula = Dragula(containers, {
        moves: function (el, container, handle) {
          return handle.classList.contains('handle')
        }
      })
    },
    data () {
      return {
        dragula: ''
      }
    },
    components: {
      todoColumn,
      doingColumn,
      doneColumn
    }
  }
</script>
<style scoped>
</style>
