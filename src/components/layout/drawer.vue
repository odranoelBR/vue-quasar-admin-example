<template>
  <q-drawer ref="leftDrawer">
    <div class="list no-border platform-delimiter">
      <div class="list-label ">Dashboard</div>
      <q-drawer-link icon="home" :to="{path: '/dash', exact: true}">
        Dashboard One
      </q-drawer-link>
      <div class="list-label ">Forms</div>
      <q-drawer-link icon="search" :to="{path: '/form', exact: true}">
        Form find / edit
      </q-drawer-link>

    </div>
  </q-drawer>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .toolbar {
    min-height: 70px;
  }
</style>
