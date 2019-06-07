<template>
  <q-card>
    <q-card-title class="bg-blue-grey-2">
      <h5>
        Todo
        <button
          class="primary bg-green float-right cursor-pointer"
          @click="addCardTask()"
        >
          <q-icon name="add" />
        </button>
      </h5>
    </q-card-title>
    <q-card-main
      ref="todo"
      class="bg-blue-grey-1"
    >
      <card-task
        v-for="(task, index) in todoTasks"
        :key="index"
        :class="index"
      />
    </q-card-main>
  </q-card>
</template>

<script>
import cardTask from "./cardTask.vue";
export default {
  components: {
    cardTask
  },
  data() {
    return {
      todoTasks: []
    };
  },
  methods: {
    addCardTask() {
      this.todoTasks.push({});
    }
  }
};
</script>

<style scoped>
.bg-blue-grey-1 {
  min-height: 500px;
}
</style>
