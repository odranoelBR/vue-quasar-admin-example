<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" >
    <div v-if="getMobileMode">
      <div  id="android-preview" class="platform-android mat-only">
        <iframe id="android-iframe" frameborder="0" src="https://quasar-admin.firebaseapp.com/android/#/"></iframe>
      </div>
      <div  id="ios-preview" class="platform-ios ios-only">
        <iframe id="ios-iframe" frameborder="0" src="https://quasar-admin.firebaseapp.com/ios/#/"></iframe>
      </div>
    </div>
    <q-layout :style="{ backgroundColor: backgroundColor}" v-else>
      <template v-if="getLayoutNeeded">
        <toolbar slot="header"></toolbar>
        <drawer></drawer>
      </template>
      <div class="layout-view">
        <content-header></content-header>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </q-layout>
  </div>
</template>
<script>
  import toolbar from './components/layout/toolbar.vue'
  import drawer from './components/layout/drawer.vue'
  import contentHeader from './components/layout/content-header.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    data () {
      return {
        backgroundColor: 'whitesmoke'
      }
    },
    computed: {
      ...mapGetters(['getLayoutNeeded', 'getMobileMode'])
    },
    components: {
      toolbar,
      drawer,
      contentHeader
    }
  }
</script>

<style>
  .fade-enter-active, .fade-enter{
    -webkit-animation: moveFromRight .5s both ease;
    animation: moveFromRight .5s both ease;
  }
  .fade-leave-to, .fade-leave-active {
    -webkit-animation: moveToLeft 1s both ease;
    animation: moveToLeft 1s both ease;
  }
  .layout-padding {
    padding: 1em 4em;
  }
  @media screen and (max-width: 600px){
    .layout-padding {
      padding: 1.5em .5em;
    }
  }
  @-webkit-keyframes moveToLeft {
    from { }
    to { opacity: .5; -webkit-transform: translateX(-100%); }
  }
  @keyframes moveToLeft {
    from { }
    to { opacity: .5; -webkit-transform: translateX(-100%); transform: translateX(-100%); }
  }

  @-webkit-keyframes moveFromRight {
    from { opacity: .7; -webkit-transform: translateX(100%); }
  }
  @keyframes moveFromRight {
    from {opacity: .7; -webkit-transform: translateX(100%); transform: translateX(100%); }
  }

  .drawer-closer .item-content {
    margin-left: 50px !important;
  }
  .router-link-active .item-primary{
    color: #027be3;
  }
  .q-picker-textfield .q-picker-textfield-label{
    color: inherit !important;
  }
  .label-success .q-picker-textfield-label {
    color: #4caf50 !important;
  }
  .label-error .q-picker-textfield-label {
    color: #f44336 !important;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
  .label-success .q-picker-textfield:after, .label-error .q-picker-textfield:after{
    content: "" !important;
  }
  #android-preview {
    display: block;
    text-align: center;
    width: 467px;
    height: 800px;
    background: url('./statics/devices-sprite.jpg') 0 -800px no-repeat;
    background-size: 467px;
    margin: 5px auto 0;
  }
  #ios-preview {
    text-align: center;
    width: 467px;
    height: 800px;
    background: url('./statics/devices-sprite.jpg') center top no-repeat;
    background-size: 467px;
    margin: 5px auto 0;
  }

  #android-preview iframe {
    margin-top: 64px;
    width: 357px;
    height: 590px;
    background: #fff;
  }
  #ios-preview iframe {
    margin-top: 64px;
    width: 320px;
    height: 590px;
    background: #fff;
  }
  canvas {
    width: 270px !important;
  }
</style>
