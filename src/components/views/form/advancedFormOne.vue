<template>
  <div>
    <div class="layout-padding ">
      <div class="card">
        <div class="card-title bg-teal text-white">
          Advanced Form One
        </div>
        <div class="card-content bg-white adv-form-one">
          <q-stepper @finish="finish()" ref="stepper" >
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
                <div class="offset-1of5 ">
                  <div class="card" v-if="userData.name">
                    <div class="card-content">
                      <h6>{{userData.name}}</h6>
                      {{userData.email}}
                      <p class="caption">Choose one of the user comments</p>
                      <div class="list">
                          <label class="item two-lines" v-for="comment in userComments">
                          <div class="item-primary">
                            <q-radio v-model="choosedComment" :val="comment.id"></q-radio>
                          </div>
                          <div class="item-content">
                            <div>{{comment.email}}</div>
                            <div class="ellipsis comment-name">{{comment.name}}</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex">
                <button class="orange" v-if="choosedComment" @click="$refs.stepper.nextStep()">Continue</button>
              </div>
            </q-step>
            <q-step title="Create an ad group">
              An ad group contains one or more ads which target a shared set of keywords.
              <br><br>
              <label>
                Enable next step
              </label>
            </q-step>
          </q-stepper>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import eInput from './embeeded/eInput.vue'
  import { required } from 'vuelidate/lib/validators'
  export default {
    name: 'AdvancedFormOne',
    mounted () {
    },
    data () {
      return {
        userName: 'Bret',
        userData: [],
        userComments: [],
        choosedComment: '',
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
    },
    components: {
      eInput
    },
    methods: {
      finish () {

      },
      findUser () {
        this.$http
          .get('users/1')
          .then(response => { this.userData = response.data })

        this.$http
          .get('comments?postId=1')
          .then(response => { this.userComments = response.data })

        this.$v.$touch()
      }
    }
  }
</script>
<style scoped>
  .comment-name{
    width: 150px;
  }
</style>
