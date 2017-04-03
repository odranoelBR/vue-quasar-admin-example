<template>
  <div class="flex justify-center full-height" :class="heightSize">
    <div class="row gt-sm">
      <div class="row">
        <div class="list">
          <label class="item" v-for="color in colors">
            <div class="item-primary">
              <q-radio v-model="bgColor" :val="color"></q-radio>
            </div>
            <div class="item-content capitalize">
              {{color}}
            </div>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="list fit">
          <label class="item" v-for="tone in colorTones">
            <div class="item-primary">
              <q-radio v-model="toneColor" :val="tone"></q-radio>
            </div>
            <div class="item-content capitalize">
              {{tone}}
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto " id="login">
      <div class="card-title" :class="finalBgColor">
        <svg id="logo" viewBox="0 0 483 483"
             style="enable-background:new 0 0 460 460;"
             xml:space="preserve" width="128px" height="128px"
             v-html="logoMethod">
        </svg>
        <h4>{{logo}}</h4>
      </div>
      <div class="card-content bg-white ">
        <div class="stacked-label">
          <input required class="full-width" type="email" v-model="email">
          <label>Email</label>
        </div>
        <div class="stacked-label">
          <input required class="full-width" type="password" v-model="password">
          <label>Password</label>
        </div>
      </div>
      <div class="card-actions inline-block vertical-middle">
        <button class="teal fit " :class="buttonClass" @click="login()">Login</button>
        <button class="red fit" :class="buttonClass" @click="login()">Login Google</button>
        <button class="blue fit" :class="buttonClass" @click="login()">Login Facebook</button>
      </div>
    </div>
    <div class="row gt-sm">
      <div class="row ">
        <div class="list fit">
          <label class="item" v-for="bClass in buttonClasses">
            <div class="item-primary">
              <q-radio v-model="buttonClass" :val="bClass"></q-radio>
            </div>
            <div class="item-content capitalize">
              {{bClass}}
            </div>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="list">
          <label class="item" v-for="logoName in logos">
            <div class="item-primary">
              <q-radio v-model="logo" :val="logoName"></q-radio>
            </div>
            <div class="item-content capitalize">
              {{logoName}}
            </div>
          </label>
          <button class="teal raised full-width " @click="startAnimation()">Animate !</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  /* eslint-disable */
  import {mapMutations} from 'vuex'
  import Vivus from 'vivus'
  import logoData from './logoData'
  import { Platform } from 'quasar'
  export default {
    mounted () {
      this.setLayoutNeeded(false)
      this.setIsLoginPage(true)
      this.startAnimation()
    },
    beforeDestroy () {
      this.setLayoutNeeded(true)
      this.setIsLoginPage(false)
    },
    computed: {
      heightSize (){
        if (Platform.is.desktop) {
          return 'items-center'
        }
        return ''
      },
      finalBgColor () {
        return `bg-${this.bgColor}-${this.toneColor}`
      },
      logoMethod () {
        return logoData[this.logo]
      }
    },
    data () {
      return {
        logos: Object.keys(logoData),
        logo: 'Digitalizer',
        email: 'quasar@admin.com',
        password: '123456',
        bgColor: 'purple',
        toneColor: 10,
        colors: ['purple', 'blue', 'red', 'green', 'amber'],
        colorTones: ['2', '4', '6', '8', '10'],
        buttonClasses: ['normal','outline', 'clear', 'push', 'bordered', 'round'],
        buttonClass: 'normal',
        vivus: ''
      }
    },
    methods: {
      ...mapMutations(['setLayoutNeeded', 'setIsLoginPage']),
      login () {
        this.setLayoutNeeded(true)
        this.setIsLoginPage(false)
        this.$router.push('/')
      },
      startAnimation () {
        this.vivus = new Vivus('logo', {
            duration: 400,
          forceRender: false
          }, function(element) {
            for (let item of element.el.children[0].children) {
              item.setAttribute('style', 'fill:white')
              item.setAttribute('style', 'fill:white')
            }
          }
        )
      }
    }
  }
</script>
<style scoped>
  .card {
    margin-bottom: 0px;
  }
  .card-content {
    min-height: 160px;
  }
  button {
    margin-bottom: 4%;
  }
  h4 {
    font-weight: 300;
  }
</style>
