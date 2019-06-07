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

    <div class="row q-gutter-md">
      <div class="col">
        <q-icon
          class="cursor-pointer	"
          name="fa fa-envelope"
          size="27px"
        />
        <admin-menu />
      </div>
      <div class="col">
        <a
          href="https://github.com/odranoelBR/vue-quasar-admin-example"
          class="text-white"
        >
          <q-icon
            class="cursor-pointer"
            name="fab fa-github"
            size="25px"
          />
        </a>
      </div>
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
<style scoped>
a {
   text-decoration: none;
}
</style>

