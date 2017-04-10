<template>
  <div class="list no-border platform-delimiter light-paragraph">
    <template v-for="(parent, index) in links">
      <div class="list-label ">{{replaceUnderlineToSpace(index)}}</div>
      <template v-for="child in parent.routes">
        <q-drawer-link :icon="child.materialIcon" :to="{path: child.route, exact: true}">
          {{child.name}}
        </q-drawer-link>
      </template>
    </template>
    <div class="list-label cursor-pointer">Quasar Ready UI</div>
    <a href="http://quasar-framework.org/quasar-play/android/index.html#/showcase" target="_blank"
       class="item item-link drawer-closer cursor-pointer text-black" >
      <i class="fa fa-puzzle-piece item-primary" ></i>
      <div class="item-content">Components (55+)</div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['links'],
  methods: {
    replaceUnderlineToSpace (text) {
      while (text.indexOf('_') !== -1) {
        text = text.replace('_', ' ')
      }
      return text
    }
  }
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
