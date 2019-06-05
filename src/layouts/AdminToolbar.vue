<template>
  <q-toolbar>
    <q-btn flat dense round @click="toggleMenu()">
      <q-icon name="menu" />
    </q-btn>

    <q-toolbar-title>
      Quasar Admin App
    </q-toolbar-title>

    <div>
      <q-icon name="fa fa-envelope" size="20px"></q-icon>
      <admin-menu />
    </div>
  </q-toolbar>
</template>

<script>
import AdminMenu from "./AdminMenu.vue";
export default {
  components: {
    AdminMenu
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    }
  }
};
</script>
