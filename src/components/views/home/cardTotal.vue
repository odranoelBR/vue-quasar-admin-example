<template>
  <div class="card bg-teal-8 text-white animate-scale ">
    <div class="card-content ">
      <div class="row">
        <div class="auto">
          <i>people</i>
        </div>
        <div class="auto">
          <p class="text-italic "> {{title}}</p>
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
    props: ['title', 'total'],
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
