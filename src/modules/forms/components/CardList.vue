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
        :max="pagination.pageSize"
        :max-pages="10"
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
    pagination: {
      type: Object,
      required: true,
      // eslint-disable-next-line no-unused-labels
      default: () => { pageSize: 1 }
    }
  },
  data: () => ({
    page: 1
  }),
  methods: {

  }
}
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 219px;
}
</style>