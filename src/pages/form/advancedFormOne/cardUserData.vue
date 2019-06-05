<template>
  <div class="card" v-if="userData.name">
    <div class="card-content">
      <h6>{{ userData.name }}</h6>
      {{ userData.email }}
      <p class="caption">Choose one of the user Albums</p>
      <div class="list">
        <label
          class="item"
          v-for="(album, index) in filteredAlbums"
          :key="index"
        >
          <div class="item-primary">
            <q-radio
              @input="change(album)"
              v-model="selectedAlbum"
              :val="album.id"
              :label="album.title"
            ></q-radio>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      userAlbums: [],
      selectedAlbum: ""
    };
  },
  computed: {
    filteredAlbums() {
      return this.userAlbums.slice(0, 3);
    }
  },
  methods: {
    change(album) {
      this.$emit("input", album);
    }
  },
  watch: {
    userData() {
      this.$http.jsonplaceholder
        .get(`albums?userId=${this.userData.id}`)
        .then(response => {
          this.userAlbums = response.data;
        });
    }
  }
};
</script>
<style scoped>
@media screen and (min-width: 600px) {
  .post-data {
    max-width: 110px;
  }
}
@media screen and (min-width: 920px) {
  .post-data {
    max-width: 340px;
  }
}
@media screen and (min-width: 1280px) {
  .post-data {
    max-width: 540px;
  }
}
</style>
