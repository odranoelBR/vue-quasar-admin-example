<template>
  <div>
    <div class="floating-label" :class="labelColor">
      <q-select :type="type"
                class="full-width"
                :class="borderColor"
                :options="options"
                :label="label"
                :value="value"
                @input="change($event)"
                ></q-select>
      <transition-group name="slide-fade">
        <span class="label text-red"
              v-for="(key, index) in messageKeys"
              v-show="!validation[key] && validation.$dirty"
              :key="index">

          {{validationMessages[key]}}
        </span>
      </transition-group>
      <transition name="fade"  mode="out-in">
        <i v-show="validAndDirty" class="text-green" >check</i>
      </transition>
      <transition name="fade"  mode="out-in">
        <i v-show="invalidAndDirty" class="text-red">clear</i>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      validation: {
        type: Object,
        required: true
      },
      value: {
        required: true
      },
      type: {
        required: true
      },
      validationMessages: {},
      label: {},
      options: {}
    },
    computed: {
      messageKeys () {
        return Object.keys(this.validationMessages)
      },
      validAndDirty () {
        return !this.validation.$invalid && this.validation.$dirty
      },
      invalidAndDirty () {
        return this.validation.$invalid && this.validation.$dirty
      },
      labelColor () {
        return this.validAndDirty ? 'label-success' : '' ||
          this.invalidAndDirty ? 'label-error' : ''
      },
      borderColor () {
        return this.validAndDirty ? 'has-success' : '' ||
          this.invalidAndDirty ? 'has-error' : ''
      }
    },
    data () {
      return {}
    },
    methods: {
      change (value) {
        this.validation.$touch()
        this.$emit('input', value)
      }
    }
  }
</script>
<style scoped>
  .has-success {
    border-bottom: 2px solid #4caf50 !important;
  }
  .label-success .q-picker-textfield-label {
    color: #4caf50;
  }
  i {
    position: absolute;
    top: 20px;
    right: 7px;
    font-size: 22px;
  }
  .floating-label {
    min-height: 81px;
  }
  .floating-label span .label{
    padding: 0 0.3rem 0 0;
    font-size: 13px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to,  .fade-leave-active  {
    opacity: 0;
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.7s ease;
  }
  .slide-fade-enter{
    transform: translateY(-10px);
    opacity: 0;
  }
  .slide-fade-leave-active{
    transform: translateY(-7px);
    opacity: 0;
  }

</style>
