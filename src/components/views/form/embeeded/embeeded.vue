<template>
  <div>
    <div class="layout-padding ">
      <div class="flex wrap gutter">
        <div class="width-1of2 sm-width-1of1">
          <div class="card">
            <div class="card-title bg-teal text-white">
              Input
            </div>
            <div class="card-content bg-white">
              <e-input
                label="Name"
                v-model="name"
                :validation="$v.name"
                :validation-messages="validationMessages.name"
                :value="name"
              ></e-input>
            </div>
          </div>
        </div>
        <div class="width-1of2 sm-width-1of1">
          <div class="card">
            <div class="card-title bg-teal text-white">
              Select
            </div>
            <div class="card-content bg-white">
              Coming...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { required, minLength, alpha } from 'vuelidate/lib/validators'
  import eInput from './eInput.vue'
  export default {
    name: 'EmbeededValidationsElements',
    mounted () {
    },
    data () {
      return {
        name: '',
        validationMessages: {
          name: {
            required: 'Name is required.',
            minLength: 'Minimum 5 characters.',
            alpha: 'Only letters.'
          }
        }
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(5),
        alpha
      }
    },
    components: {
      eInput
    }
  }
</script>
<style scoped></style>
