<template>
  <div>
    <q-list>
      <q-collapsible group="links" :label="index" v-for="(links, index) in groupedLinks" :key="index" class="collapsible-no-padding">
        <q-list no-border>
          <q-item v-for="(link, index) in links.routes" :key="index" :to="{ name: link.routeName }" link>
            <q-item-side>
              <q-item-tile avatar>
                <img :src="`./statics/${link.icon}`" alt="">
              </q-item-tile>
            </q-item-side>
            <q-item-main>
              <q-item-tile label class="light-paragraph">{{link.name}}</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-collapsible>
    </q-list>
    <img :src="'statics/black-hole.png'" alt="" id="logo-background">
  </div>
</template>
<script>
export default {
  data () {
    return {
      groupedLinks: {
        Dashboard: {
          routes: [
            { routeName: 'dash-one', icon: 'dash-one.svg', materialIcon: 'home', name: 'Dashboard One' }
          ]
        },
        Forms: {
          routes: [
            { routeName: 'form', img: 'fa fa-search', materialIcon: 'search', name: 'Form find / edit' },
            { routeName: 'advanced-form-one', img: 'fa fa-hdd-o', materialIcon: 'filter_1', name: 'Adv. Form One' }
          ]
        },
        Pages: {
          routes: [
            { routeName: 'login-one', img: 'fa fa-unlock-alt', materialIcon: 'lock_open', name: 'Login One' },
            { routeName: 'pricing', img: 'fa fa-money', materialIcon: 'attach_money', name: 'Pricing' },
            { routeName: 'drag-and-drop', img: 'fa fa-arrows', materialIcon: 'move_to_inbox', name: 'Drag and Drop' },
            { routeName: 'server-side-data-table', img: 'fa fa-list-alt', materialIcon: 'list_compact', name: 'Server Side Data Table' }
          ]
        }
      }
    }
  }
}
</script>
<style scoped>
.router-link-active {
  border-right: 3px solid #7FD7FB;
  color: #2196F3;
}

.collapsible-no-padding {
  padding: 0;
}

#logo-background {
  position: absolute;
  left: 20px;
  bottom: 0;
  width: 250px;
  opacity: 0.1
}
</style>
