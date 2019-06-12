<template>
  <q-layout view="hHr LpR lFf">
    <q-header elevated>
      <admin-toolbar @toggleMenu="leftDrawerOpen = !leftDrawerOpen" />
    </q-header>

    <admin-drawer :left-drawer-open="leftDrawerOpen" />

    <q-page-container>
      <transition
        appear
        :duration="{ enter: 200, leave: 200 }"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-page padding>
          <router-view class="q-ma-md" />
        </q-page>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import { mapMutations } from "vuex";
import AdminDrawer from "./AdminDrawer.vue";
import AdminToolbar from "./AdminToolbar.vue";
import { getPosts } from "src/services";
export default {
  name: "AdminLayout",
  components: {
    AdminDrawer,
    AdminToolbar
  },
  data: () => ({
    leftDrawerOpen: true,
    data: []
  }),
  mounted() {
    this.go();
  },
  methods: {
    ...mapMutations("app", ["setPosts"]),
    openURL,
    go() {
      getPosts().then(response => {
        this.setPosts(response.data);
      });
    }
  }
};
</script>

<style></style>
