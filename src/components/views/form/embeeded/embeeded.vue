<template>
  <div>
    <div class="layout-padding ">
      <div class="flex wrap gutter">
        <div class="gt-md-width-1of3 width-1of1">
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
        <div class="gt-md-width-1of3 width-1of1">
          <div class="card">
            <div class="card-title bg-teal text-white">
              Select
            </div>
            <div class="card-content bg-white">
              <e-select
                type="list"
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
        <div class="gt-md-width-1of3 width-1of1">
          <div class="card">
            <div class="card-title bg-teal text-white">
              DateTime
            </div>
            <div class="card-content bg-white">
              <e-date-time
                format="YYYY/MM/DD"
                label="Date of birth"
                v-model="dateOfBirth"
                :validation="$v.dateOfBirth"
                :validation-messages="validationMessages.dateOfBirth"
                :value="dateOfBirth"
              ></e-date-time>
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
  import eDateTime from './eDateTime.vue'
  export default {
    name: 'EmbeededValidationsElements',
    mounted () {
    },
    data () {
      return {
        name: '',
        authentication: '',
        dateOfBirth: '',
        validationMessages: {
          name: {
            required: 'Name is required.',
            minLength: 'Minimum 5 characters.',
            alpha: 'Only letters.'
          },
          authentication: {
            required: 'Authentication is required.'
          },
          dateOfBirth: {
            required: 'Date of birth is required.'
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
      },
      dateOfBirth: {
        required
      }
    },
    components: {
      eInput,
      eSelect,
      eDateTime
    }
  }
</script>
<style scoped></style>
