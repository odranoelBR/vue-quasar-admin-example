<template>
  <div  class="toolbar">
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
      <a href="https://github.com/odranoelBR/vue-quasar-admin-example" class="text-white">
        <i class="fa fa-2x fa-github"></i>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .toolbar{
    min-height: 60px;
  }
</style>
