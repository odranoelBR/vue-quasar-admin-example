<template>
  <q-card>
    <q-card-title :class="titleClasses">
      <span class="text-white">
        <h5>{{ title }}</h5>
      </span>
    </q-card-title>
    <q-card-main>
      <h3>${{ price }}</h3>
      <h6 class="text-italic">
        {{ priceSubtitle }}
      </h6>
    </q-card-main>
    <q-card-actions> 
      <slot name="body" />
    </q-card-actions>
    <div class="card-content bg-white">
      <q-btn
        :color="buttonClasses"
        outline
        class="fit"
        @click="planSelected()"
      >
        Choose
      </q-btn>
    </div>
  </q-card>
</template>

<script type="text/javascript">
export default {
  props: [
    "title",
    "titleClasses",
    "price",
    "priceSubtitle",
    "buttonClasses",
    "cardId"
  ],
  data() {
    return {};
  },
  methods: {
    planSelected() {
      this.$emit("card-selected", this.cardId);
    }
  }
};
</script>
<style scoped>
.label {
  min-height: 50px;
}
h5 {
  font-weight: 300;
  flex: 1 1 auto;
}
h3,
h6 {
  font-weight: 300;
}
.label.pointing-up:before,
.label.pointing-right:before,
.label.pointing-down:before,
.label.pointing-left:before {
  width: 1.4rem;
  height: 1.4rem;
}
.q-card {
  width: 332px;
}
</style>
