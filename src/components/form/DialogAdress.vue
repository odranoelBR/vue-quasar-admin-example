<template>
  <div>
    <q-btn
      color="primary"
      class="float-right"
      @click="toggle = !toggle"
    >
      Adress
    </q-btn>
    <q-dialog v-model="toggle">
      <q-layout
        view="Lhh lpR fff"
        container
        style="max-height: 67vh; max-width:40vh"
        class="bg-white"
      >
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Adress of {{ user.name }}</q-toolbar-title>
          </q-toolbar>
        </q-header>
        <q-card>
          <q-card-section>
            <GmapMap
              :center="{lat: -34.397, lng: 150.644}"
              :zoom="1"
              map-type-id="roadmap"
              style="width: 350px; height: 300px"
            >
              <GmapMarker :position="latLong" />
            </GmapMap> 
          </q-card-section>
          <q-card-section>
            <q-input
              v-model="user.address.street"
              required
              label="Street"
            />  
            <q-input
              v-model="user.address.suite"
              label="Suite"
            />
            <q-input
              v-model="user.address.city"
              label="City"
            />
            <q-input
              v-model="user.address.zipcode"
              label="Zipcode"
            />
          </q-card-section>
          <q-card-section>
            <q-btn
              color="positive"
              @click="save"
            >
              Salvar
            </q-btn>
          </q-card-section>
        </q-card>
      </q-layout>
    </q-dialog>
  </div>  
</template>

<script type="text/javascript">
import { gmapApi } from 'vue2-google-maps'
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        toggle: false
      }
    },
    computed: {
        google: gmapApi,
        latLong () {
          if (!this.google) return

          return new this.google.maps.LatLng(this.user.address.geo.lat, this.user.address.geo.lng)
        }
    },
    methods: {
      save () {
        this.$emit('save')
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