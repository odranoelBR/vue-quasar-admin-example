<template>
  <div class="row q-gutter-sm">
    <div class="col-9">
      <div class="row">
        <card-filter
          class="col q-mb-sm"
          :types="types"
          @search="search"
        />
      </div>
      <div class="row relative-position">
        <card-list :cards="cards" />
        <q-inner-loading :showing="loadingCards">
          <q-spinner-gears
            size="50px"
            color="primary"
          />
        </q-inner-loading>
      </div>
    </div>
  </div>
</template>
<script>
import CardList from '@modules/forms/components/CardList'
import CardFilter from '@modules/forms/components/CardFilter'
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    CardList, CardFilter
  },
  data: () => ({
  }),
  computed: {
    ...mapFields('forms', ['types', 'cards', 'loadingCards'])
  },
  created () {
    this.getTypes()
  },
  methods: {
    ...mapActions('forms', ['getTypes', 'getCards']),
    search (params) {
      this.getCards(params)
    }
  }
}
</script>
<style scoped>
.q-tab-panel {
  background-color: #f7faff;
}
</style>