<template>
  <div class="row q-pa-md q-gutter-md">
    <div class="col-4">
      <q-input
        v-model="user.username"
        required
        label="Username"
      />
    </div>
    <div class="col-4">
      <q-input
        v-model="user.phone"
        required
        label="Phone"
      />
    </div>
    <div class="col-4">
      <q-input
        v-model="user.website"
        required
        label="Website"
      />
    </div>
    <div class="col-4">
      <q-input
        v-model="user.email"
        required
        label="Email"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
      required: true
    }
  }
}
</script>

