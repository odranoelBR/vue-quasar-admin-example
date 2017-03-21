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
              <e-select
                label="Authentication"
                v-model="authentication"
                :validation="$v.authentication"
                :validation-messages="validationMessages.authentication"
                :value="authentication"
                :options="options"
              ></e-select>
            </div>
          </div>
        </div>
      </div>
      <div class="flex wrap justify-center">
        <div class="width-1of3">
          <button class="teal raised outline fit" @click="$v.$touch()">Try Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { required, minLength, alpha } from 'vuelidate/lib/validators'
  import eInput from './eInput.vue'
  import eSelect from './eSelect.vue'
  export default {
    name: 'EmbeededValidationsElements',
    mounted () {
    },
    data () {
      return {
        name: '',
        authentication: '',
        validationMessages: {
          name: {
            required: 'Name is required.',
            minLength: 'Minimum 5 characters.',
            alpha: 'Only letters.'
          },
          authentication: {
            required: 'Authentication is required.'
          }
        },
        options: [
          { label: 'Google', value: 'google' },
          { label: 'Facebook', value: 'facebook' },
          { label: '', value: '' }
        ]
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(5),
        alpha
      },
      authentication: {
        required
      }
    },
    components: {
      eInput,
      eSelect
    }
  }
</script>
<style scoped></style>
