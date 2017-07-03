<template>
  <q-drawer ref="leftDrawer" v-show="getLayoutNeeded">
    <div id="profile">
      <img :src="photo" style='height: 80px' class="inline-block">
      <!--img src="../img/avatar-1.svg" id="avatar" class="inline-block"--> 
      <div id="user-name">
        <span class="text-white"> {{ name }} </span>
        <hr>
        <span class="text-white"> {{ email }} </span>
        <hr>
      </div>
      <div id="user-actions">
        <button class="bordered blue small" ><i>person</i></button>
        <button class="bordered blue small" ><i>lock</i></button>
        <router-link to="login-one">
          <button class="bordered blue small" ><i>exit_to_app</i></button>
        </router-link>
      </div>
    </div>
    <menu-one v-if="getMenuCollapse" :links="links"></menu-one>
    <menu-two v-else :links="links"></menu-two>

    <div class="fixed-bottom text-center light text-italic">
      Powered by
      <a href="https://vuejs.org/"><img src="../img/vue-logo.png" alt=""></a>
      <a href="http://quasar-framework.org/"><img src="../img/quasar-logo.png" alt=""></a>
    </div>
  </q-drawer>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import menuOne from './menuOne.vue'
  import menuTwo from './menuTwo.vue'
  import firebase from 'firebase'
  
  export default {
    data () {
      return {
        photo: '',
        userId: '',
        name: '',
        email: '',
        user: {},
        links: {
          Dashboard: {
            routes: [
              { route: '/', faIcon: 'fa fa-home', materialIcon: 'home', name: 'Dashboard One' }
            ],
            show: true
          },
          Forms: {
            routes: [
              { route: '/form', faIcon: 'fa fa-search', materialIcon: 'search', name: 'Form find / edit' },
              { route: '/embeeded', faIcon: 'fa fa-check', materialIcon: 'check', name: 'Embeeded validations' },
              { route: '/advanced-form-one', faIcon: 'fa fa-hdd-o', materialIcon: 'filter_1', name: 'Adv. Form One' }
            ],
            show: false
          },
          Pages: {
            routes: [
              { route: '/login-one', faIcon: 'fa fa-unlock-alt', materialIcon: 'lock_open', name: 'Login One' },
              { route: '/pricing', faIcon: 'fa fa-money', materialIcon: 'attach_money', name: 'Pricing' },
              { route: '/drag-and-drop', faIcon: 'fa fa-arrows', materialIcon: 'move_to_inbox', name: 'Drag and Drop' },
              { route: '/server-side-data-table', faIcon: 'fa fa-list-alt', materialIcon: 'list_compact', name: 'Server Side Data Table' }
            ],
            show: false
          }
        }
      }
    },
    created () {
      var vm = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          vm.user = user
          vm.name = vm.user.displayName
          vm.email = vm.user.email
          vm.photo = vm.user.photoURL
          vm.userId = vm.user.uid
        }
      })
    },
    methods: {
      logOut () {
        firebase.auth().signOut()
      }
    },
    computed: {
      ...mapGetters(['getLayoutNeeded', 'getMenuCollapse'])
    },
    components: {
      menuOne,
      menuTwo
    }
  }
</script>
<style scoped>
  .fixed-bottom {
    margin-bottom: 1%;
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
  #menu-collapse {
    margin-top: 5%;
  }
</style>
