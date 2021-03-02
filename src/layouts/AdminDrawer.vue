<template>
  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    elevated
  >
    <q-list
      padding
      class="text-weight-light drawer"
      separator
      style="height: calc(100% - 180px); margin-top: 180px; border-right: 1px solid #ddd"
    >
      <q-expansion-item
        v-for="(links, index) in groupedLinks"
        :key="index"
        group="links"
        :label="index"
        :default-opened="links.show"
      >
        <q-list no-border>
          <q-item
            v-for="(link, indexRoutes) in links.routes"
            :key="indexRoutes"
            :to="{ name: link.routeName }"
            link
            active-class="router-link-active"
          >
            <q-item-section avatar>
              <q-icon
                :name="link.faIcon"
                alt=""
              />
            </q-item-section>
            <q-item-section
              label
              class="light-paragraph"
            >
              {{ link.name }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-list>

    <img-user-profile v-once />

    <div-powered-icons v-once />
  </q-drawer>
</template>
<script>
import DivPoweredIcons from '@layouts/DivPoweredIcons'
import ImgUserProfile from '@layouts/ImgUserProfile'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    DivPoweredIcons, ImgUserProfile
  },
  
  data: () => ({
    groupedLinks: {
      Dashboard: {
        routes: [
          { route: "/", faIcon: "fa fa-home", materialIcon: "home", name: "Dashboard One", routeName: "dash-one" }
        ],
        show: false
      },
      Forms: {
        routes: [
          { route: "/form-search", faIcon: "fa fa-search", materialIcon: "search", name: "Form find / edit", routeName: "form-search" },
          { route: "/advanced-form", faIcon: "fa fa-ticket-alt", materialIcon: "card-travel", name: "Advanced Form", routeName: "advanced-form" }
        ],
        show: false
      },
      Pages: {
        routes: [
          { route: "/pricing", faIcon: "fa fa-money-bill-alt", materialIcon: "attach_money", name: "Pricing", routeName: "pricing" },
          { route: "/drag-and-drop", faIcon: "fa fa-arrows-alt", materialIcon: "move_to_inbox", name: "Drag and Drop", routeName: "drag-and-drop" }
        ],
        show: false
      }
    }
  }),
  computed: {
    ...mapFields(['leftDrawerOpen'])
  }, 
  created () {
    this.makeTheRightExpansionItemOpen()
  },
  methods: {
    makeTheRightExpansionItemOpen () {
      Object.keys(this.groupedLinks).forEach(link => {
        let routes = this.groupedLinks[link].routes.map(route => route.route)

        this.groupedLinks[link].show = routes.includes(this.$route.path)
      })
    }
  }
};
</script>
<style scoped>
.router-link-active {
  border-right: 3px solid #7fd7fb;
  color: #2196f3;
  background-color: #fafafa;
}
.drawer {
  font-size: 1.1em;
}
</style>
