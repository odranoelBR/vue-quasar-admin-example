<template>
  <div id="q-app">
    <q-layout :style="{ backgroundColor: backgroundColor}">
      <q-toolbar slot="header" class="bg-primary">
        <q-toolbar-title>
          Quasar admin
        </q-toolbar-title>
        <q-btn class="relative-position animate-bounce" color="secondary" icon="fa-envelope-o">
          <message-popover :posts="posts"></message-popover>
        </q-btn>
        <q-btn color="secondary" small round id="botao-menu" @click="toogleMenu" icon="menu"> </q-btn>
      </q-toolbar>
      <!--<g-menu slot="left"></g-menu>-->
      <q-transition appear enter="flipInX" leave="flipOutX" duration="500">
        <user-menu v-on:logout="toogleMenu" v-if="showMenu" nome="Leo"></user-menu>
      </q-transition>
    </q-layout>
    <q-inner-loading :visible="showMenu" dark size="0" />
  </div>
</template>
<script type="text/javascript">
import { QLayout, QBtn, QToolbar, QToolbarTitle, QAjaxBar, QTransition, QInnerLoading } from 'quasar'
import Drawer from '@/layout/drawer/drawer.vue'
import ContentHeader from './components/layout/content-header.vue'
import UserMenu from '@/layout/userMenu.vue'
import MessagePopover from '@/layout/messagePopover.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    QInnerLoading, QLayout, QBtn, QToolbar, QToolbarTitle, QAjaxBar, QTransition, Drawer, ContentHeader, UserMenu, MessagePopover
  },
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      posts: [],
      showMenu: false,
      backgroundColor: 'whitesmoke'
    }
  },
  computed: {
    ...mapGetters(['getLayoutNeeded', 'getMobileMode'])
  },
  methods: {
    toogleMenu () {
      this.showMenu = !this.showMenu
      setTimeout(() => {
        document.getElementsByClassName('dark')[0].addEventListener('click', () => {
          this.closeMenu()
        })
      }, 500)
    },
    closeMenu () {
      this.showMenu = false
    },
    getPosts () {
      this.$http.jsonplaceholder.get(`posts`)
        .then(response => { this.posts = response.data })
    }

  }
}
</script>

<style>
html,
body {
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
