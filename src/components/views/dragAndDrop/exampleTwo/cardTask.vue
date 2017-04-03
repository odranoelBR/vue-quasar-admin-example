<template>
  <div class="card">
    <div class="card-title" :class="`bg-${cardColor}`">
      <i class="handle cursor-pointer">crop_free</i>
      <input type="text" v-model="title">
      <div class="float-right">
        <i>keyboard_arrow_down</i>
        <q-popover ref="popover">
          <div class="list item-delimiter highlight">
            <div
              class="item item-link no-margin"
              v-for="color in cardColorOptions"
              :class="`bg-${color}`"
              @click="chooseColor(color)"
            >
            </div>
          </div>
        </q-popover>
      </div>
    </div>
    <div class="card-content bg-white">
      <input
        class="full-width"
        type="text"
        v-model="body">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      body: '',
      cardColor: 'blue',
      cardColorOptions: [ 'orange', 'red', 'blue', 'green' ]
    }
  },
  methods: {
    chooseColor (color) {
      this.$refs.popover.close()
      this.cardColor = color
    }
  }
}
</script>
<style scoped>
  .item-link {
    min-width: 50px;
  }
</style>
