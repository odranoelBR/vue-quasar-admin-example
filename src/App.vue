<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" >
    <q-layout :style="{ backgroundColor: backgroundColor}">
      <div class="fixed-bottom-right bg-primary text-white gt-md" id="configurations">
        <label>
          Layout
          <q-toggle
            class="green"
            v-model="getLayoutNeeded"
            @input="setLayoutNeeded(!getLayoutNeeded)"
          ></q-toggle>
        </label>
      </div>
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
  import { mapGetters, mapMutations } from 'vuex'
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
    methods: {
      ...mapMutations(['setLayoutNeeded'])
    },
    components: {
      toolbar,
      drawer
    }
  }
</script>

<style>
  #configurations {
    padding: 10px;
  }
</style>
