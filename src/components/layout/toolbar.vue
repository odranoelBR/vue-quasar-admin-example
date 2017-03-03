<template>
  <div  class="toolbar">
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
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped></style>
