<template>
  <div class="toolbar">
    <q-ajax-bar color="#80cbc4"></q-ajax-bar>
    <router-link :to="'/'" v-if="$router.currentRoute.meta.backButton">
      <button>
        <i>arrow_back</i>
      </button>
    </router-link>
    <button class="hide-on-drawer-visible" @click="$parent.$children[1].$refs.leftDrawer.open()" v-else >
      <i>menu</i>
    </button>
    <q-toolbar-title :padding="1">
      Quasar Admin App
    </q-toolbar-title>
    <div class="right-itens">
      <a @click="setMobileMode(true)" class="text-white gt-sm inline">
        <i class="fa fa-3x fa-mobile"></i>
      </a>
      <a href="https://github.com/odranoelBR/vue-quasar-admin-example" class="text-white">
        <i class="fa fa-2x fa-github"></i>
      </a>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations(['setMobileMode'])
    }
  }
</script>
<style scoped>
  .toolbar{
    min-height: 60px;
  }
  .right-itens a{
    margin-right: 10px;
  }
</style>
