<template>
  <button class="relative-position animate-bounce">
    <i class="fa fa-2x fa-envelope-o"></i>
    <span class="floating label bg-dark">22</span>
    <q-popover self="top right" >
      <div class="list striped">
        <p class="caption no-margin text-center text-white bg-teal">Messages from people</p>
        <div class="item item-link two-lines item-delimiter no-margin"
             v-for="post in filteredPosts"
        >
          <img class="item-primary" :src="randomAvatarUrl()">
          <div class="item-content has-secondary">
            <div>{{post.title}}</div>
            <div>{{randomDate()}}</div>
          </div>
          <span class="label bg-red text-white item-secondary no-margin">
            <i class="left-detail"></i> New
          </span>
        </div>
      </div>
    </q-popover>
  </button>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getPosts']),
      filteredPosts () {
        return this.getPosts.slice(0, 5)
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
  .list{
    max-width: 400px;
  }
  .item > img.item-primary:not(.thumbnail) {
    border-radius: 10px !important;
  }
  .item > img.item-primary {
    width: 48px;
    height: 46px;
  }
  .item > .item-secondary {
    width: 57px;
    font-size: 13px;
  }
</style>
