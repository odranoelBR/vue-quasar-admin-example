<template>
  <q-card>
    <q-card-title class="card-title" :class="`bg-${cardColor}`">
      <q-icon name="crop_free" class="handle cursor-pointer"></q-icon>
      <q-input v-model="title"></q-input>
      <div class="float-right">
        <q-icon name="keyboard_arrow_down"></q-icon>
        <q-popover ref="popover">
          <q-list>
            <q-item v-for="(color, index) in cardColorOptions"
              :class="`bg-${color}`" @click="chooseColor(color)" :key="index">
            </q-item>
          </q-list>
        </q-popover>
      </div>
      </q-card-title>
    </div>
    <q-card-main class="bg-white">
      <q-input v-model="body" type="textarea" :min-rows="4"></q-input>
    </q-card-main>
  </q-card>
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
