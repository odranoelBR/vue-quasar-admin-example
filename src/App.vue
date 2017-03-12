<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
      <template v-if="getLayoutNeeded">
        <toolbar slot="header"></toolbar>
        <drawer></drawer>
      </template>
      <router-view class="layout-view"></router-view>
    </q-layout>
  </div>
</template>
<script>
  import toolbar from './components/layout/toolbar.vue'
  import drawer from './components/layout/drawer.vue'
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    computed: {
      ...mapGetters(['getLayoutNeeded'])
    },
    components: {
      toolbar,
      drawer
    }
  }
</script>

<style>
  body {
    background-color: whitesmoke;
  }
</style>
