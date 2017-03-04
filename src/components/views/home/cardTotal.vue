<template>
  <div class="card text-white animate-scale" :class="backgroundColor">
    <div class="card-content ">
      <div class="row">
        <div class="width-1of3">
          <i>{{iconName}}</i>
        </div>
        <div class="width-2of3">
          <p class="text-italic ">{{title}}</p>
          <h5>
            <i-count-up
              :start="0"
              :end="total"
              :decimals="0"
              :duration="2.5"
              :options="options"
            ></i-count-up>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ICountUp from 'vue-countup-v2'
  export default {
    props: ['title', 'total', 'backgroundColor', 'iconName'],
    data () {
      return {
        options: {
          separator: '.'
        }
      }
    },
    components: {
      ICountUp
    }
  }
</script>
<style scoped>
  i {
    font-size: 54px;
  }
</style>
