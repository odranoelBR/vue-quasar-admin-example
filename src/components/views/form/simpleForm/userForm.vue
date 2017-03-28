<template>
  <div>
    <div class="flex wrap gutter">
      <div class="width-1of3 sm-width-1of1">
        <div class="floating-label">
          <input required class="full-width" v-model="user.username">
          <label>Username</label>
        </div>
      </div>
      <div class="width-1of3 sm-width-1of1">
        <div class="floating-label">
          <input required class="full-width" v-model="user.phone">
          <label>Phone</label>
        </div>
      </div>
    </div>
    <div class="flex wrap gutter">
      <div class="width-1of3 sm-width-1of1">
        <div class="floating-label">
          <input required class="full-width" v-model="user.website">
          <label>Website</label>
        </div>
      </div>
      <div class="width-1of3 sm-width-1of1">
        <div class="floating-label">
          <input required class="full-width" v-model="user.email">
          <label>Email</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {}
    },
    props: ['user']
  }
</script>
<style scoped>
  .flex {
    margin-top: 1%;
  }
</style>
