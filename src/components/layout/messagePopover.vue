<template>
  <q-popover self="top right">
    <q-list highlight class="no-padding">
      <q-list-header class=" text-center text-white bg-teal">Messages from people</q-list-header>
      <q-item v-for="(post, index) in filteredPosts" :key="index" style="width: 400px">
        <q-item-side :avatar="randomAvatarUrl()" />
        <q-item-main>
          <q-item-tile label>{{post.title}}</q-item-tile>
          <q-item-tile sublabel>{{randomDate()}}</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile icon="chat_bubble" color="green" />
        </q-item-side>
      </q-item>
    </q-list>
  </q-popover>
</template>
<script>
import { QPopover, QList, QItem, QListHeader, QItemSide, QItemMain, QItemTile } from 'quasar'
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  components: {
    QPopover, QList, QItem, QListHeader, QItemSide, QItemMain, QItemTile
  },
  computed: {
    filteredPosts () {
      return this.posts.slice(0, 5)
    }
  },
  methods: {
    randomDate () {
      return new Date((new Date()) - Math.floor(Math.random() * 10000000000))
    },
    randomAvatarUrl () {
      return `https://api.adorable.io/avatars/face/${this.randomEye()}/${this.randomNose()}/${this.randomMouth()}/${this.randomHexColor()}`
    },
    randomHexColor () {
      return Math.random().toString(16).slice(2, 8)
    },
    randomEye () {
      return this.randomArrayElement(['eyes1', 'eyes10', 'eyes2', 'eyes3', 'eyes4', 'eyes5', 'eyes6', 'eyes7', 'eyes9'])
    },
    randomNose () {
      return this.randomArrayElement(['nose2', 'nose3', 'nose4', 'nose5', 'nose6', 'nose7', 'nose8', 'nose9'])
    },
    randomMouth () {
      return this.randomArrayElement(['mouth1', 'mouth10', 'mouth11', 'mouth3', 'mouth5', 'mouth6', 'mouth7', 'mouth9'])
    },
    randomArrayElement (array) {
      return array[Math.floor((Math.random() * array.length))]
    }
  }
}
</script>
<style scoped>

</style>
