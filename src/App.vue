<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
      <toolbar slot="header"></toolbar>
      <drawer></drawer>
      <router-view class="layout-view"></router-view>
    </q-layout>
  </div>
</template>

<script>
  import toolbar from './components/layout/toolbar.vue'
  import drawer from './components/layout/drawer.vue'
  export default {
    name: 'app',
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
