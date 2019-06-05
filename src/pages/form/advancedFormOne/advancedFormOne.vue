<template>
  <div>
    <card-ball
      icon="fa-id-card-o"
      icon-size="36px"
      title="Choose photos to reveal of the user"
    >
      <div slot="content">
        <q-stepper
          ref="stepper"
          vertical
          @step="
            stepNumber => {
              currentStep = stepNumber;
            }
          "
        >
          <q-step title="Find a user by username" :name="1">
            <div class="row wrap gutter">
              <div class="col-4">
                <q-input
                  float-label="User Name"
                  v-model="userName"
                  :validation="$v.userName"
                  :validation-messages="validationMessages.userName"
                  :value="userName"
                />
              </div>
              <div class="col-2">
                <q-btn color="primary" @click="findUser()">Search</q-btn>
              </div>
              <div class="col-auto">
                <card-user-data
                  :user-data="userData"
                  v-model="selectedAlbum"
                ></card-user-data>
              </div>
            </div>
            <div class="row"></div>
          </q-step>
          <q-step title="Choose photos" :name="2">
            <card-data-table
              :selected-album="selectedAlbum"
              v-on:selectedRows="populatePhotos"
            ></card-data-table>
          </q-step>
        </q-stepper>
      </div>
      <div class="col" slot="actions">
        <q-btn color="orange" v-show="currentStep == 2" @click="previousStep()"
          >previous</q-btn
        >
        <q-btn color="orange" v-show="canContinue" @click="nextStep()"
          >Continue</q-btn
        >
        <q-btn color="green" v-show="finished" @click="finish()">Preview</q-btn>
      </div>
    </card-ball>
    <q-modal ref="previewModal" class="minimized">
      <q-gallery-carousel :src="photosForGalery"></q-gallery-carousel>
    </q-modal>
  </div>
</template>
<script type="text/javascript">
import { required } from "vuelidate/lib/validators";
import cardUserData from "./cardUserData.vue";
import cardDataTable from "./cardDataTable.vue";
export default {
  name: "AdvancedFormOne",
  data() {
    return {
      userName: "Bret",
      userData: {},
      currentStep: "1",
      selectedAlbum: "",
      selectedPhotos: [],
      validationMessages: {
        userName: {
          required: "Username is required."
        }
      }
    };
  },
  validations: {
    userName: {
      required
    }
  },
  computed: {
    photosForGalery() {
      let galery = [];
      this.selectedPhotos.forEach(photo => {
        galery.push(photo.data.thumbnailUrl);
      });
      return galery;
    },
    finished() {
      return this.selectedPhotos.length > 0;
    },
    canContinue() {
      return this.selectedAlbum && this.currentStep === 1;
    }
  },
  components: {
    cardUserData,
    cardDataTable
  },
  methods: {
    finish() {
      this.$refs.previewModal.open();
    },
    nextStep() {
      this.$refs.stepper.next();
    },
    previousStep() {
      this.$refs.stepper.previous();
    },
    findUser() {
      this.$http.jsonplaceholder
        .get(`users?username=${this.userName}`)
        .then(response => {
          this.userData = response.data[0];
        });

      this.$v.$touch();
    },
    populatePhotos(photos) {
      photos.forEach(item => {
        this.selectedPhotos.push(item);
      });
    }
  }
};
</script>
<style scoped></style>
