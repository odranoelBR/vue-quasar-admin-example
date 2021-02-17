<template>
  <div class="row q-col-gutter-sm fit">
    <div
      v-for="card in cards"
      :key="card.cardId"
      class="col-4"
    >
      <q-card class="magic-card">
        <q-card-section>
          <q-img
            v-if="card.imageUrl"
            :src="card.imageUrl"
            :alt="card.name"
          />
          <span v-else>{{ card.name }}</span>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
<style scoped>
</style>