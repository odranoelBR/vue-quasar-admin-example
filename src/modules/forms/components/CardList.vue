<template>
  <div>
    <div class=" row items-start q-gutter-sm ">
      <div
        v-for="card in cardsPerPage"
        :key="card.cardId"
        class="col-auto"
      >
        <q-card class="my-card">
          <img
            :src="`https://media.services.zam.com/v1/media/byName/hs/cards/enus/${card.cardId}.png`"
            :alt="card.name"
          >

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
        :max="maxPages"
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
    },
    filters: {
      type: Object,
      default: () => { }
    }
  },
  data: () => ({
    maxPerPage: 10,
    page: 1
  }),
  computed: {
    filteredCards () {
      return this.cards.filter(this.filterSets)
    },
    cardsPerPage () {
      return this.filteredCards.slice(this.offset, this.maxPerPage * this.page)
    },
    maxPages () {
      return Math.ceil(this.filteredCards.length / this.maxPerPage)
    },
    offset () {
      if (this.page === 1) return 1

      if (this.page === 2) return this.maxPerPage + 1

      return ((this.page - 1) * this.maxPerPage) + 1
    }
  },
  methods: {

    filterSets (card) {
      if (this.filters.sets && this.filters.sets.length > 0) {
        return this.filters.sets.includes(card.cardSet)
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