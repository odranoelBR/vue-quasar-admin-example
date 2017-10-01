<template>
  <q-modal ref="modal" @open="startMap()">
    <q-card class="bg-white no-margin">
      <q-card-title class="bg-primary text-white">
        Adress of {{user.name}}
      </q-card-title>
      <q-card-main>
        <div id="map"></div>
        <div class="wrap gutter">
          <div class="width-1of1">
            <q-input float-label="Street" v-model="user.address.street" />
          </div>
          <div class="width-1of1">
            <q-input float-label="Suite" v-model="user.address.suite" />
          </div>
        </div>
        <div class="width-1of1">
          <q-input float-label="City" v-model="user.address.city" />
        </div>
        </div>
        <div class="width-1of1">
          <q-input float-label="Zipcode" v-model="user.address.zipcode" />
        </div>
        </div>
        </div>
      </q-card-main>
      <q-card-actions class="bg-light">
        <div class="row xs-gutter">
          <div class="col-auto">
            <q-btn color="primary" @click="save()">Save</q-btn>
          </div>
          <div class="col-auto">
            <q-btn color="secondary" @click="$refs.modal.close()">Close</q-btn>
          </div>
        </div>
      </q-card-actions>
    </q-card>
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
        .patch(`users/${this.user.id}`, { address: this.user.address })
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
