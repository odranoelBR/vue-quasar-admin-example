<template>
  <q-layout view="hHr LpR lFf">
    <q-header elevated>
      <admin-toolbar @toggleMenu="leftDrawerOpen = !leftDrawerOpen" />
    </q-header>

    <admin-drawer :leftDrawerOpen="leftDrawerOpen" />

    <q-page-container>
      <router-view class="q-pa-xl" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import { mapMutations } from "vuex";
import AdminDrawer from "./AdminDrawer.vue";
import AdminToolbar from "./AdminToolbar.vue";
import { getPosts } from "src/boot/axios";
export default {
  name: "AdminLayout",
  components: {
    AdminDrawer,
    AdminToolbar
  },
  mounted() {
    this.go();
  },
  data: () => ({
    leftDrawerOpen: true,
    data: []
  }),
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
