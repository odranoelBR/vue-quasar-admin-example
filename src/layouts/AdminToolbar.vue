<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      @click="toggleMenu()"
    >
      <q-icon name="menu" />
    </q-btn>

    <q-toolbar-title>
      Quasar Admin App
    </q-toolbar-title>

    <q-space />

    <q-input
      v-model="search"
      dense
      dark
      filled
      standout="text-white"
      placeholder="Search"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <admin-menu />

    <a
      href="https://github.com/odranoelBR/vue-quasar-admin-example"
      class="text-white q-pa-sm"
    >
      <q-icon
        class="cursor-pointer"
        name="fab fa-github"
        size="25px"
      />
    </a>

    <btn-dropdown-menu />
  </q-toolbar>
</template>

<script>
import AdminMenu from "./AdminMenu.vue";
import BtnDropdownMenu from "./BtnDropdownMenu.vue";
export default {
  components: {
    AdminMenu, BtnDropdownMenu
  },
  data: () => ({
    search: '',
    searchFocused: false
  }),
  methods: {
    toggleMenu () {
      this.$emit("toggleMenu");
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>

