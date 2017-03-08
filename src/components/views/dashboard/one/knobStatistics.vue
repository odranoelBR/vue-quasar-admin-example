<template>
  <div>
    <div class="flex wrap">
      <div class="auto">
        <tag-knob :value="currentIncome"
                  :min="0"
                  :max="doubleRangeMinMax.max"
                  title="Current Income"
                  track-color=""
                  title-color="blue"
                  tag-classes="bg-blue"
                  size="120px"
                  placeholder-before="$"
        ></tag-knob>
      </div>
      <div class="auto">
        <tag-knob :value="currentExpenses"
                  :min="0"
                  :max="maxExpenses"
                  title="Current Expenses"
                  track-color=""
                  title-color="red"
                  tag-classes="bg-red"
                  size="120px"
                  placeholder-before="$ -"
        ></tag-knob>
      </div>
    </div>
    <div class="flex wrap small-gutter">
      <div class="auto">
        <q-range
          v-model="currentIncome"
          :min="minIncome"
          :max="doubleRangeMinMax.max"
          label-always
          snap
        ></q-range>
      </div>
    </div>
    <div class="flex wrap small-gutter">
      <div class="auto">
        <q-range
          class="red"
          v-model="currentExpenses"
          :min="minExpenses"
          :max="maxExpenses"
          label-always
          snap
        ></q-range>
      </div>
    </div>
    <div class="flex small-gutter">
      <div class="auto">
        <q-double-range
          class="teal"
          v-model="doubleRangeMinMax"
          :min="0"
          :max="maxIncome"
          label drag-range
          label-always
        ></q-double-range>
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
  /* eslint-disable */
  import tagKnob from './tagKnob.vue'
  import { Toast } from 'quasar'
  export default {
    data () {
      return {
        minExpenses: 0,
        minIncome: 0,
        maxIncome: 5000,
        currentIncome: 998,
        currentExpenses: 125,
        doubleRangeMinMax: {
          min: 0,
          max: 5000
        }
      }
    },
    watch: {
      currentIncome () {
        if (this.currentIncome < this.currentExpenses){
          this.currentExpenses = this.currentIncome
          Toast.create.negative({html: `You're in financial trouble.`})
        }
      }
    },
    computed: {
      maxExpenses () {
        return this.currentIncome
      }

    },
    props: ['cardTitle'],
    components: {
      tagKnob
    }
  }
</script>
<style scoped>
</style>
