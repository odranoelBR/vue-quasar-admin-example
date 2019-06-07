<template>
  <q-card>
    <q-card-title class="bg-blue-grey-2">
      <h5>
        Doing
        <button
          class="primary bg-green float-right cursor-pointer"
          @click="addCardTask()"
        >
          <q-icon name="add" />
        </button>
      </h5>
    </q-card-title>
    <q-card-main
      ref="doing"
      class="bg-blue-grey-1"
    >
      <card-task
        v-for="(task, index) in doingTasks"
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
      doingTasks: []
    };
  },
  methods: {
    addCardTask() {
      this.doingTasks.push({});
    }
  }
};
</script>

<style scoped>
.bg-blue-grey-1 {
  min-height: 500px;
}
</style>
