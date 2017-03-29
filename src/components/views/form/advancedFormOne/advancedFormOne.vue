<template>
  <div>
    <div class="layout-padding ">
      <div class="card">
        <div class="card-title bg-teal text-white">
          Choose photos to reveal of the user
        </div>
        <div class="card-content bg-white adv-form-one">
          <q-stepper ref="stepper" @step="stepNumber => { currentStep = stepNumber }">
            <q-step title="Find a user by username">
              <div class="flex wrap gutter">
                <div class="width-2of5 sm-width-1of1">
                  <e-input
                    label="User Name"
                    v-model="userName"
                    :validation="$v.userName"
                    :validation-messages="validationMessages.userName"
                    :value="userName"
                  ></e-input>
                  <button class="teal raised outline" @click="findUser()">Search</button>
                </div>
                <div class="width-1of2 gt-width-3of5">
                  <card-user-data :user-data="userData" v-model="selectedAlbum"></card-user-data>
                </div>
              </div>
              <div class="flex">
                <button class="orange" v-if="selectedAlbum" @click="$refs.stepper.nextStep()">Continue</button>
              </div>
            </q-step>
            <q-step title="Choose photos">
              <card-data-table :selected-album="selectedAlbum" v-on:selectedRows="populatePhotos"></card-data-table>

              <div class="flex wrap gutter">
                <div class="width-1of4 sm-width-3of3">
                  <button class="orange fit" @click="$refs.stepper.previousStep()">Back</button>
                </div>
                <div class="width-1of4 sm-width-3of3" v-show="selectedPhotos.length > 0">
                  <button class="green fit" @click="finish()">Preview</button>
                </div>
              </div>
            </q-step>
          </q-stepper>
        </div>
      </div>
    </div>
    <q-modal ref="previewModal" class="minimized">
      <q-gallery-slider :src="photosForGalery" ></q-gallery-slider>
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
        this.$http
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
