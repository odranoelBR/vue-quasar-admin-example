<template>
  <div class="card bg-white animate-scale ">
    <div class="card-title bg-teal text-white">
      {{cardTitle}}
    </div>
    <div class="card-content">
      <div class="flex gutter">
        <div class="width-1of2">
          <span class="tag label bg-red text-white">
          <q-knob
            v-model="model"
            size="95px"
            style="font-size: 0.9rem"
            color="#fff"
            track-color="light-blue"
            :min="5"
            :max="25"
            :placeholder="'$ ' + model"
          ></q-knob>
          </span>
        </div>
        <div class="width-1of2">
          <span class="tag label bg-blue text-white">
          <q-knob
            class=""
            v-model="model"
            size="95px"
            style="font-size: 0.9rem"
            color="#fff"
            track-color="light-blue"
            :min="5"
            :max="25"
            :placeholder="'$ ' + model"
          ></q-knob>
          </span>
        </div>
      </div>
      <div class="flex gutter">
        <div class="width-1of2">
          <span class="tag label bg-red text-white">
          <q-knob
            v-model="model"
            size="95px"
            style="font-size: 0.9rem"
            color="#fff"
            track-color="light-blue"
            :min="5"
            :max="25"
            :placeholder="'$ ' + model"
          ></q-knob>
          </span>
        </div>
        <div class="width-1of2">
          <span class="tag label bg-blue text-white rotate">
          <q-knob
            class="inverseRotate"
            v-model="model"
            size="95px"
            style="font-size: 0.9rem"
            color="#fff"
            track-color="light-blue"
            :min="5"
            :max="25"
            :placeholder="'$ ' + model"
          ></q-knob>
          </span>
        </div>
      </div>

    </div>
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable */
  import Chart from 'chart.js'
  export default {
    data () {
      return {
        type: 'horizontalBar',
        chart: '',
        model: 15
      }
    },
    props: {
      cardTitle: {
        default () { return 'Graph'}
      }
    },
    watch: {
      data () {
        this.startChart()
      },
      type () {
        this.chart.destroy()
        this.startChart()
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style scoped>

</style>
