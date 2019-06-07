<template>
  <q-card>
    <q-card-title
      class="card-title"
      :class="`bg-${cardColor}`"
    >
      <q-icon
        name="crop_free"
        class="handle cursor-pointer"
      />
      <q-input v-model="title" />
      <div class="float-right">
        <q-icon name="keyboard_arrow_down" />
        <q-popover ref="popover">
          <q-list>
            <q-item
              v-for="(color, index) in cardColorOptions"
              :key="index"
              :class="`bg-${color}`"
              @click="chooseColor(color)"
            />
          </q-list>
        </q-popover>
      </div>
    </q-card-title>
    <q-card-main class="bg-white">
      <q-input
        v-model="body"
        type="textarea"
        :min-rows="4"
      />
    </q-card-main>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      body: "",
      cardColor: "blue",
      cardColorOptions: ["orange", "red", "blue", "green"]
    };
  },
  methods: {
    chooseColor(color) {
      this.$refs.popover.close();
      this.cardColor = color;
    }
  }
};
</script>
<style scoped>
.item-link {
  min-width: 50px;
}
</style>
