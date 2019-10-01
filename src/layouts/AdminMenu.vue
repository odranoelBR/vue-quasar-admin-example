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
      return `https://api.adorable.io/avatars/face/${this.randomEye()}/${this.randomNose()}/${this.randomMouth()}/${this.randomHexColor()}`;
    },
    randomHexColor () {
      return Math.random()
        .toString(16)
        .slice(2, 8);
    },
    randomEye () {
      return this.randomArrayElement([
        "eyes1",
        "eyes10",
        "eyes2",
        "eyes3",
        "eyes4",
        "eyes5",
        "eyes6",
        "eyes7",
        "eyes9"
      ]);
    },
    randomNose () {
      return this.randomArrayElement([
        "nose2",
        "nose3",
        "nose4",
        "nose5",
        "nose6",
        "nose7",
        "nose8",
        "nose9"
      ]);
    },
    randomMouth () {
      return this.randomArrayElement([
        "mouth1",
        "mouth10",
        "mouth11",
        "mouth3",
        "mouth5",
        "mouth6",
        "mouth7",
        "mouth9"
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
