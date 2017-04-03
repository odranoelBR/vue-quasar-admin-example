<template>
  <q-modal ref="modal" @open="startMap()">
    <div class="card fit">
      <div class="card-title bg-teal text-white">
        Adress of {{user.name}}
      </div>
      <div class="card-content bg-white">
        <div id="map"></div>
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

<script type="text/javascript">
  /* eslint-disable */
  import { Toast } from 'quasar'
  import GMaps from 'gmaps'

  export default {
    data () {
      return {
        map: ''
      }
    },
    props: ['user'],
    methods: {
      save () {
        this.$http.jsonplaceholder
          .patch(`users/${this.user.id}`, {address: this.user.address})
          .then(response => { Toast.create.positive('Updated successful!') })
      },
      startMap () {
        let vm = this
        this.map = new GMaps({
          el: '#map',
          lat: parseFloat(this.user.address.geo.lat),
          lng: parseFloat(this.user.address.geo.lng),
          zoom: 3,
          dblclick (e) {
            vm.map.removeMarkers()
            vm.addMarker(e.latLng.lat(), e.latLng.lng())
          }
        })
        this.addMarker(this.user.address.geo.lat, this.user.address.geo.lng)
      },
      addMarker (lat, lng) {
        this.map.addMarker({
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        })
      }
    }
  }
</script>
<style scoped>
  #map {
    width: 300px !important;
    height: 300px !important;
  }
</style>
