<template>
  <q-card>
    <q-card-title class="bg-blue-grey-2">
      <h5>
        Doing
        <button
          class="primary bg-green float-right cursor-pointer"
          @click="addCardTask()"
        >
          <q-icon name="add"></q-icon>
        </button>
      </h5>
    </q-card-title>
    <q-card-main class="bg-blue-grey-1" ref="doing">
      <card-task
        v-for="(task, index) in doingTasks"
        :key="index"
        :class="index"
      ></card-task>
    </q-card-main>
  </q-card>
</template>

<script>
import cardTask from "./cardTask.vue";
export default {
  data() {
    return {
      doingTasks: []
    };
  },
  methods: {
    addCardTask() {
      this.doingTasks.push({});
    }
  },
  components: {
    cardTask
  }
};
</script>

<style scoped>
.bg-blue-grey-1 {
  min-height: 500px;
}
</style>
