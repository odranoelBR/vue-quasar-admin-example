<template>
  <button class="primary">
    <i>image</i>
    <q-tooltip>
      <img :src="url" alt="" >
    </q-tooltip>
  </button>
</template>
<script>
export default {
  props: ['url']
}
</script>
<style scoped>
  img {
    max-height: 300px;
  }
</style>
