<template>
  <q-btn flat>
    <q-icon
      class="cursor-pointer	"
      name="fa fa-envelope"
      size="20px"
    />
    <q-menu>
      <q-list
        bordered
        separator
        style="max-width: 450px"
      >
        <q-item-section class="text-center text-white bg-secondary q-pa-sm">
          Messages from people
        </q-item-section>
        <q-item
          v-for="(post, index) in filteredPosts"
          :key="index"
          v-ripple
          clickable
        >
          <q-item-section avatar>
            <q-img
              class="item-primary"
              :src="randomAvatarUrl()"
              spinner-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label overline>
              {{ post.title }}
            </q-item-label>
            <q-item-label caption>
              {{ randomDate() }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPosts"]),
    filteredPosts () {
      return this.getPosts.slice(0, 5);
    }
  },
  methods: {
    randomDate () {
      return new Date(new Date() - Math.floor(Math.random() * 10000000000));
    },
    randomAvatarUrl () {
      return `https://avatars.dicebear.com/4.5/api/${this.randomSprit()}/${this.randomThing()}.svg`
    },
    randomSprit () {
      return this.randomArrayElement([
        "male",
        "female"
      ]);
    }, 
    randomThing () {
      return this.randomArrayElement([
        "bear",
        "song",
        "wall",
        "blue",
        "tech"
      ]);
    }, 
    randomArrayElement (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  }
};
</script>
<style scoped>
.item > .q-img:not(.thumbnail) {
  border-radius: 10px !important;
}
.item > .q-img {
  width: 48px;
  height: 46px;
}
.item > .item-secondary {
  width: 57px;
  font-size: 13px;
}
</style>
