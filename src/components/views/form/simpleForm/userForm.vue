<template>
  <div>
    <div class="row xs-gutter">
      <div class="col-12 col-xl-6">
        <q-input float-label="Username" v-model="user.username" />
      </div>
      <div class="col-12 col-xl-6">
        <q-input float-label="Phone" v-model="user.phone" />
      </div>
    </div>
    <div class="row xs-gutter">
      <div class="col-12 col-xl-6">
        <q-input float-label="Website" v-model="user.website" />
      </div>
      <div class="col-12 col-xl-6">
        <q-input float-label="Email" v-model="user.email" />
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

</style>
