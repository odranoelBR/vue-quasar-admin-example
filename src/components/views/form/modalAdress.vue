<template>
  <q-modal ref="modal" class="" >
    <div class="card fit">
      <div class="card-title bg-teal text-white">
        Adress of {{user.name}}
      </div>
      <div class="card-content bg-white">
        <div class="wrap gutter">
          <div class="width-1of1">
            <div class="floating-label">
              <input required class="full-width" v-model="user.address.street">
              <label>Street</label>
            </div>
          </div>
          <div class="width-1of1">
            <div class="floating-label">
              <input required class="full-width" v-model="user.address.suite">
              <label>Suite</label>
            </div>
          </div>
          <div class="width-1of1">
            <div class="floating-label">
              <input required class="full-width" v-model="user.address.city">
              <label>City</label>
            </div>
          </div>
          <div class="width-1of1">
            <div class="floating-label">
              <input required class="full-width" v-model="user.address.zipcode">
              <label>Zipcode</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-actions justify-center flex">
      <div class="width-1of3 sm-width-3of3">
        <button class="primary outline raised fit" @click="save()">Save</button>
      </div>
      <div class="width-1of3 sm-width-3of3">
        <button class="teal outline raised fit" @click="$refs.modal.close()">Close</button>
      </div>
    </div>
  </q-modal>
</template>

<script>
  import { Toast } from 'quasar'
  export default {
    data () {
      return {}
    },
    props: ['user'],
    methods: {
      save () {
        this.$http
          .patch(`users/${this.user.id}`, {address: this.user.address})
          .then(response => { Toast.create.positive('Updated successful!') })
      }
    }
  }
</script>
<style scoped>
</style>
