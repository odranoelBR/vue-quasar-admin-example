<template>
  <div>
    <div class="row q-col-gutter-sm ">
      <div
        v-for="card in cards"
        :key="card.cardId"
        class="col-4"
      >
        <q-card>
          <q-card-section>
            <q-img
              :src="card.imageUrl"
              :alt="card.name"
            />
          </q-card-section>

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>
                  Have a drink.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="page"
        :direction-links="true"
      />
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
  },
  data: () => ({
    maxPerPage: 10,
    page: 1
  }),
  computed: {
  },
  methods: {
    filterSets (card) {
      if (this.filters.sets && this.filters.sets.length > 0) {
        return this.filters.sets.includes(card.cardSet)
      }
      return true
    },
    filterMechanics (card) {

      if (!this.filters.mechanics) {
        return true
      }
      if (!card.mechanics) return false

      let mechanics = card.mechanics.map(obj => obj.name)
      if (this.filters.mechanics.length > 0) {
        return this.filters.mechanics.some(mechanic => mechanics.includes(mechanic))
      }

      return true
    }

  }
}
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 219px;
}
</style>