<template>
  <q-drawer ref="leftDrawer">
    <div class="list no-border platform-delimiter">
      <div class="list-label ">Basic</div>
      <q-drawer-link icon="home" :to="{path: '/', exact: true}">
        Home
      </q-drawer-link>
      <q-drawer-link icon="home" :to="{path: '/form', exact: true}">
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
