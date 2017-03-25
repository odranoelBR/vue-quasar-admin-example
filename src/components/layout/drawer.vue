<template>
  <q-drawer ref="leftDrawer">
    <div id="profile">
      <img src="./img/avatar-1.svg" id="avatar" class="inline-block">
      <div id="user-name">
        <span class="text-white">Greldon</span>
        <hr>
      </div>
      <div id="user-actions">
        <button class="bordered blue small" ><i>person</i></button>
        <button class="bordered blue small" ><i>lock</i></button>
        <button class="bordered blue small" ><i>exit_to_app</i></button>
      </div>
    </div>
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
      <q-drawer-link icon="check" :to="{path: '/advanced-form-one', exact: true}">
        Adv. Form One
      </q-drawer-link>
      <div class="list-label ">Pages</div>
      <q-drawer-link icon="lock_open" :to="{path: '/login-one', exact: true}">
        Login One
      </q-drawer-link>
      <q-drawer-link icon="attach_money" :to="{path: '/pricing', exact: true}">
        Pricing
      </q-drawer-link>
      <q-drawer-link icon="move_to_inbox" :to="{path: '/drag-and-drop', exact: true}" class="gt-sm">
        Drag and Drop
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
  .fixed-bottom a img {
    width: 25px;
    height: 25px;
  }
  #avatar{
    padding: 20px;
  }
  #profile {
    height: 130px;
    background-color: #009688;
  }
  #user-name {
    left: 90px;
    bottom: 77px;
    position: relative;
    width: 159px;
  }
  #user-actions {
    left: 90px;
    bottom: 71px;
    position: relative;
    width: 171px;
  }
</style>
