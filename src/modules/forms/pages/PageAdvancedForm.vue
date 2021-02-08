<template>
  <div class="row q-gutter-sm">
    <div class="col-9">
      <div class="row">
        <card-filter
          class="col q-mb-sm"
          :hearthstone-info="hearthstoneInfo"
          :mechanics="mechanics"
          @filters="setFilters"
          @choosedClass="getByClass"
        />
      </div>
      <div class="row relative-position">
        <card-list
          :cards="cardsByClass"
          :filters="filters"
        />
        <q-inner-loading :showing="loadingClasses">
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
import { info, getByClass } from 'src/services/hearthstoneService'
export default {
  components: {
    CardList, CardFilter
  },
  data: () => ({
    hearthstoneInfo: {},
    cardsByClass: [],
    loadingClasses: false,
    filters: {}
  }),
  computed: {
    mechanics () {
      let mechanics = this.cardsByClass
        .filter(card => card.mechanics)
        .map(card => card.mechanics.map(mechanic => mechanic.name))
        .flat(1)

      return [...new Set(mechanics)]
    }
  },
  created () {
    info().then(response => this.hearthstoneInfo = response.data)
  },
  methods: {
    getByClass (choosedClass) {
      this.loadingClasses = true
      getByClass(choosedClass)
        .then(response => this.cardsByClass = response.data)
        .finally(() => this.loadingClasses = false)
    },
    setFilters (filters) {
      this.filters = filters
    }
  }
}
</script>
<style scoped>
.q-tab-panel {
  background-color: #f7faff;
}
</style>