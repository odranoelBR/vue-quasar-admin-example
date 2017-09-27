<template>
  <q-card class="bg-white">
    <q-card-title class="bg-red text-white text-center">
      <q-icon name="fa-minus-circle" size="36px"></q-icon>
    </q-card-title>
    <q-card-main class="no-padding text-center">
      <q-rating v-model="power" :max="5" icon="fa-bars" style="display: inline-grid" size="3.5vw" ref="rating" />
    </q-card-main>
    <q-card-title class="bg-primary text-white text-center">
      <q-icon name="fa-plus-circle" size="40px"></q-icon>
    </q-card-title>
  </q-card>
</template>
<script>
export default {
  mounted () {
    for (let item in [...Array(50).keys()]) {
      this.$refs.rating.$el.childNodes.forEach((element, index) => {
        this.toggleHovered(element, (parseFloat(item) * 9) + (parseFloat(index) + parseFloat(index) + 3))
        this.toggleHovered(element, (parseFloat(item) * 9) + (parseFloat(index) + parseFloat(index) + 4))
      })
    }
  },
  methods: {
    toggleHovered (element, index) {
      setTimeout(function () {
        if (element.className.search('active') !== -1) {
          element.classList.toggle('hovered')
        }
      }, index * 150)
    }
  },
  data () {
    return {
      power: 3
    }
  }
}
</script>

<style>

</style>
