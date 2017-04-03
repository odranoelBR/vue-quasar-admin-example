<template>
  <div class="card " >
    <div class="card-title bg-blue-grey-2">
      <h5>Done</h5>
    </div>
    <div class="card-content bg-blue-grey-1" ref="done">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      doneTasks: []
    }
  }
}
</script>

<style scoped>
  .bg-blue-grey-1{
    min-height: 500px;
  }
</style>
