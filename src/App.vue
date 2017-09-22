<template>
  <div id="q-app">
    <q-layout :style="{ backgroundColor: backgroundColor}" ref="layout" view="hHr LpR lFf">
      <q-toolbar slot="header" class="bg-primary">
        <q-toolbar-title class="no-padding">
          <div class="row xs-gutter">
            <div class="col-auto self-center">
              <img :src="'statics/quasar-logo.png'" alt="" id="logo">
            </div>
            <div class="col-auto">
              <h5>Quasar Admin App</h5>
            </div>
          </div>
        </q-toolbar-title>
        <q-btn class="relative-position" small round color="secondary">
          <q-icon name="fa-envelope-o"></q-icon>
          <message-popover :posts="posts"></message-popover>
        </q-btn>
        <q-btn color="secondary" small round id="botao-menu" @click="toogleMenu" icon="menu"> </q-btn>
      </q-toolbar>
      <drawer slot="left"></drawer>
      <q-transition appear enter="flipInX" leave="flipOutX" duration="500">
        <user-menu v-on:logout="toogleMenu" v-if="showMenu" nome="Leo"></user-menu>
      </q-transition>
      <div class="layout-padding">
        <router-view></router-view>
      </div>
    </q-layout>
    <q-inner-loading :visible="showMenu" dark size="0" />
  </div>
</template>
<script type="text/javascript">
import Drawer from '@/layout/drawer/drawer.vue'
import ContentHeader from './components/layout/content-header.vue'
import UserMenu from '@/layout/userMenu.vue'
import MessagePopover from '@/layout/messagePopover.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    Drawer, ContentHeader, UserMenu, MessagePopover
  },
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      posts: [],
      showMenu: false,
      backgroundColor: '#f7faff'
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

#logo {
  width: 40px;
}

.q-toolbar {
  padding: 0px 12px;
  box-shadow: 0 2px 8px rgba(59, 89, 178, 0.2);
}

.q-card,
.layout-aside.fixed.on-layout {
  box-shadow: 0 2px 8px rgba(59, 89, 178, 0.2);
}

.collapsible-no-padding .q-collapsible-sub-item {
  padding: 0 0 0 0;
}

.collapsible-no-padding .q-item-label {
  font-weight: 300;
}
</style>
