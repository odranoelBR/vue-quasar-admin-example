<template>
  <div class="flex justify-center">
    <div class="card  text-white text-center" id="login">
      <div class="card-title bg-deep-purple-7">
        <svg id="logo" viewBox="0 0 463 463" style="enable-background:new 0 0 463 463;" xml:space="preserve" width="128px" height="128px" v-html="logo" >
        </svg>
        <h4>Digitalizer</h4>
      </div>
      <div class="card-content bg-white ">
        <div class="floating-label">
          <input required class="full-width">
          <label>Email</label>
        </div>
        <div class="floating-label">
          <input required class="full-width">
          <label>Password</label>
        </div>
      </div>
      <div class="card-actions inline-block">
        <button class="teal raised outline fit" >Login</button>
        <button class="red raised outline fit" >Login Google</button>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {mapMutations} from 'vuex'
  import Vivus from 'vivus'
  import fingerPrint from './logoData'
  export default {
    mounted () {
      this.setLayoutNeeded(false)
      new Vivus('logo', {
          duration: 400
        }, function(element) {
          for (let item of element.el.children[0].children) {
              item.setAttribute('style', 'fill:white')
          }
        }
      )
    },
    data () {
      return {
        logo: fingerPrint
      }
    },
    methods: {
      ...mapMutations(['setLayoutNeeded'])
    }
  }
</script>
<style >
  #login {
    margin-top: 5%;
    width: 300px;
    height: 500px;
  }
  button {
    margin-bottom: 4%;
  }
  h4 {
    font-weight: 300;
  }
</style>
