<template>
  <div class="content-header" v-if="!getIsLoginPage">
    <span id="content-header-title" class="vertical-bottom">{{routerTitle}}</span>
    <button class="bg-blue-grey-8 text-white " id="configurations">
      <i>settings</i>
      <q-popover ref="popover" anchor="top left" self="top right" class="bg-blue-grey-8 text-white">
        Layout
        <q-toggle
          class="green"
          v-model="getLayoutNeeded"
          @input="setLayoutNeeded(!getLayoutNeeded)"
        ></q-toggle>
      </q-popover>
    </button>
    <hr>
  </div>
</template>
<script>
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getLayoutNeeded', 'getIsLoginPage']),
      routerTitle () {
        return this.$route.meta.name
      }
    },
    methods: {
      ...mapMutations(['setLayoutNeeded'])
    }
  }
</script>
<style scoped>
  #configurations {
    position: absolute;
    right: 65px;
    top: 7px;
  }
  .content-header {
    position: relative;
    padding: 1em 4em 0em 4em;
  }
  @media screen and (max-width: 600px){
    .content-header {
      padding: 1.5em .5em;
    }
    #configurations {
      position: absolute;
      right: 8px;
      top: 12px;
    }
  }
  #content-header-title {
    font-size: 22px;
    font-weight: 300;
  }
  .q-popover{
    padding:8px;
  }
</style>
