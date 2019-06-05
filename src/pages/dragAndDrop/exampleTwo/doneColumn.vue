<template>
  <q-card>
    <q-card-title class="card-title bg-blue-grey-2">
      <h5>Done</h5>
    </q-card-title>
    <q-card-main class="bg-blue-grey-1" ref="done"> </q-card-main>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      doneTasks: []
    };
  }
};
</script>

<style scoped>
.bg-blue-grey-1 {
  min-height: 500px;
}
</style>
