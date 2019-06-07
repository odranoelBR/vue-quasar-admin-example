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
      >
        <q-list no-border>
          <q-item
            v-for="(link, index) in links.routes"
            :key="index"
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
              {{
                link.name
              }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-list>

    <q-img
      class="absolute-top"
      src="statics/montain_back.png"
      style="height: 180px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar
          size="56px"
          class="q-mb-sm"
        >
          <img src="https://cdn.quasar-framework.org/img/boy-avatar.png">
        </q-avatar>
        <div class="text-weight-bold text-white">
          Razvan Stoenescu
        </div>
        <div>@rstoenescu</div>
      </div>
    </q-img>
  </q-drawer>
</template>
<script>
export default {
  props: {
    leftDrawerOpen: Boolean
  },
  data: () => ({
    groupedLinks: {
      Dashboard: {
        routes: [
          {
            route: "/",
            faIcon: "fa fa-home",
            materialIcon: "home",
            name: "Dashboard One",
            routeName: "dash-one"
          }
        ],
        show: true
      },
      Forms: {
        routes: [
          {
            route: "/form",
            faIcon: "fa fa-search",
            materialIcon: "search",
            name: "Form find / edit",
            routeName: "form-search"
          }
        ],
        show: false
      },
      Pages: {
        routes: [
          //     {
          //       route: "/login-one",
          //       faIcon: "fa fa-unlock-alt",
          //       materialIcon: "lock_open",
          //       name: "Login One",
          //       routeName: "login"
          //     },
          {
            route: "/pricing",
            faIcon: "fa fa-money-bill-alt",
            materialIcon: "attach_money",
            name: "Pricing",
            routeName: "pricing"
          },
          {
            route: "/drag-and-drop",
            faIcon: "fa fa-arrows-alt",
            materialIcon: "move_to_inbox",
            name: "Drag and Drop",
            routeName: "drag-and-drop"
          }
        ]
        //   show: false
        // }
      }
    }
  })
};
</script>
<style scoped>
.router-link-active {
  border-right: 3px solid #7fd7fb;
  color: #2196f3;
  background-color: #FAFAFA;
}
.drawer {
  font-size: 1.1em;
}
</style>
