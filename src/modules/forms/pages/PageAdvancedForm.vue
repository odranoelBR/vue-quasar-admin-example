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
      <div class="row justify-center">
        <card-list
          :cards="cards"
          :pagination="pagination"
          @change-page="search"
        />

        <div class="row q-pa-lg justify-center">
          <q-pagination
            v-model="page"
            :max="pagination.pageSize"
            :max-pages="10"
            @input="getCards"
          />
        </div>

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
    ...mapFields('forms', ['types', 'cards', 'loadingCards', 'pagination', 'params.page'])
  },
  created () {
    this.search()
    this.getTypes()
  },
  methods: {
    ...mapActions('forms', ['getTypes', 'getCards']),
    search () {
      this.page = 1
      this.getCards()
    }
  }
}
</script>
<style scoped>
.q-tab-panel {
  background-color: #f7faff;
}
</style>