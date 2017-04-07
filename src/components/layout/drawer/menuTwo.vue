<template>
  <div class="list no-border platform-delimiter light-paragraph">
    <template v-for="(parent, index) in links">
      <div class="list-label ">{{index}}</div>
      <template v-for="child in parent.routes">
        <q-drawer-link :icon="child.materialIcon" :to="{path: child.route, exact: true}">
          {{child.name}}
        </q-drawer-link>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: ['links']
}
</script>
<style scoped>
  .list-label:first-child{
    line-height: 50px;
  }
  .router-link-active {
    color: #027be3;
    background-color: #dadada !important;
    border-right: 2px solid #027be3;
  }
  .router-link-active .item-primary{
    color: #027be3;
  }
</style>
