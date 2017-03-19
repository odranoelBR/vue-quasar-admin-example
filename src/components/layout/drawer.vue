<template>
  <q-drawer ref="leftDrawer">
    <div class="list no-border platform-delimiter light-paragraph">
      <div class="list-label">Dashboard</div>
      <q-drawer-link icon="home" :to="{path: '/', exact: true}">
        Dashboard One
      </q-drawer-link>
      <div class="list-label ">Forms</div>
      <q-drawer-link icon="search" :to="{path: '/form', exact: true}">
        Form find / edit
      </q-drawer-link>
      <q-drawer-link icon="check" :to="{path: '/embeeded', exact: true}">
        Embeeded validations
      </q-drawer-link>
      <div class="list-label ">Pages</div>
      <q-drawer-link icon="lock_open" :to="{path: '/login-one', exact: true}">
        Login One
      </q-drawer-link>
      <q-drawer-link icon="attach_money" :to="{path: '/pricing', exact: true}">
        Pricing
      </q-drawer-link>
    </div>
    <div class="fixed-bottom text-center light text-italic">
      Powered by
      <a href="https://vuejs.org/"><img src="./img/vue-logo.png" alt=""></a>
      <a href="http://quasar-framework.org/"><img src="./img/quasar-logo.png" alt=""></a>
    </div>
  </q-drawer>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .fixed-bottom {
    margin-bottom: 1%;
  }
  .list-label:first-child{
    line-height: 50px;
  }
  .router-link-active {
    color: #027be3;
    background-color: #dadada !important;
    border-right: 2px solid #027be3;
  }
  .router-link-active .item-primary{
    color: #027be3;
  }
  img:nth-child(1) {
    width: 25px;
    height: 25px;
  }
  img:nth-child(2) {
    width: 30px;
    height: 30px;
  }
</style>
