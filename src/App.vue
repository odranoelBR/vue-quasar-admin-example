<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" >
    <q-layout :style="{ backgroundColor: backgroundColor}">
      <template v-if="getLayoutNeeded">
        <toolbar slot="header"></toolbar>
        <drawer></drawer>
      </template>
      <div class="layout-view">
        <content-header></content-header>
        <router-view></router-view>
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
      ...mapGetters(['getLayoutNeeded'])
    },
    components: {
      toolbar,
      drawer,
      contentHeader
    }
  }
</script>

<style>
  .layout-padding {
    padding: 1em 4em;
  }
  @media screen and (max-width: 600px){
    .layout-padding {
      padding: 1.5em .5em;
    }
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
</style>
