<template>
  <div>
    <card-ball icon="fa-id-card-o" icon-size="36px" title="Choose photos to reveal of the user">
      <div slot="content">
        <q-stepper ref="stepper" vertical @step="stepNumber => { currentStep = stepNumber }">
          <q-step title="Find a user by username">
            <div class="row wrap gutter">
              <div class="col-4">
                <q-input float-label="User Name" v-model="userName" :validation="$v.userName" :validation-messages="validationMessages.userName" :value="userName" />

              </div>
              <div class="col-2">
                <q-btn color="primary" @click="findUser()">Search</q-btn>
              </div>
              <div class="col-auto">
                <card-user-data :user-data="userData" v-model="selectedAlbum"></card-user-data>
              </div>
            </div>
            <div class="row">
              <q-btn color="orange" v-if="selectedAlbum" @click="$refs.stepper.nextStep()">Continue</q-btn>
            </div>
          </q-step>
          <q-step title="Choose photos">
            <card-data-table :selected-album="selectedAlbum" v-on:selectedRows="populatePhotos"></card-data-table>

            <div class="row wrap gutter">
              <div class="col">
                <q-btn color="orange fit" @click="$refs.stepper.previousStep()">Back</q-btn>
              </div>
              <div class="col" v-show="selectedPhotos.length > 0">
                <q-btn color="green fit" @click="finish()">Preview</q-btn>
              </div>
            </div>
          </q-step>
        </q-stepper>
      </div>
    </card-ball>
    <q-modal ref="previewModal" class="minimized">
      <q-gallery-slider :src="photosForGalery"></q-gallery-slider>
    </q-modal>
  </div>
</template>
<script type="text/javascript">
import { required } from 'vuelidate/lib/validators'
import eInput from '../embeeded/eInput.vue'
import cardUserData from './cardUserData.vue'
import cardDataTable from './cardDataTable.vue'
export default {
  name: 'AdvancedFormOne',
  data () {
    return {
      userName: 'Bret',
      userData: {},
      currentStep: '1',
      selectedAlbum: '',
      selectedPhotos: [],
      validationMessages: {
        userName: {
          required: 'Username is required.'
        }
      }
    }
  },
  validations: {
    userName: {
      required
    }
  },
  computed: {
    photosForGalery () {
      let galery = []
      this.selectedPhotos.forEach(photo => { galery.push(photo.data.thumbnailUrl) })
      return galery
    }
  },
  components: {
    eInput,
    cardUserData,
    cardDataTable
  },
  methods: {
    finish () {
      this.$refs.previewModal.open()
    },
    findUser () {
      this.$http.jsonplaceholder
        .get(`users?username=${this.userName}`)
        .then(response => { this.userData = response.data[0] })

      this.$v.$touch()
    },
    populatePhotos (photos) {
      photos.forEach(item => { this.selectedPhotos.push(item) })
    }
  }
}
</script>
<style scoped>

</style>
