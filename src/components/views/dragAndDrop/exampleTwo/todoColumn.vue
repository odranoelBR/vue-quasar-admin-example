<template>
  <div class="card">
    <div class="card-title bg-blue-grey-2">
      <h5>Todo
        <button
          class="primary bg-green float-right cursor-pointer"
          @click="addCardTask()"
        >
          <i>add</i>
        </button>
      </h5>
    </div>
    <div class="card-content bg-blue-grey-1" ref="todo">
      <card-task v-for="(task, index) in todoTasks" :key="index" :class="index"></card-task>
    </div>
  </div>
</template>

<script>
  import cardTask from './cardTask.vue'
  export default {
    data () {
      return {
        todoTasks: []
      }
    },
    methods: {
      addCardTask () {
        this.todoTasks.push({})
      }
    },
    components: {
      cardTask
    }
  }
</script>

<style scoped>
  .bg-blue-grey-1{
    min-height: 500px;
  }
</style>
