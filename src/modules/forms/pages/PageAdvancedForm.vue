<template>
  <div class="row q-gutter-sm">
    <div class="col-9">
      <div class="row">
        <card-filter
          class="col q-mb-sm"
          :hearthstone-info="hearthstoneInfo"
          @choosedClass="getByClass"
        />
      </div>
      <div class="row">
        <card-list :cards="cardsByClass" />
      </div>
    </div>

    <div class="col">
      qwe
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
    cardsByClass: []
  }),
  mounted () {
    info().then(response => this.hearthstoneInfo = response.data)
  },
  methods: {
    getByClass (choosedClass) {
      getByClass(choosedClass).then(response => this.cardsByClass = response.data)
    }
  }
}
</script>
<style scoped>
.q-tab-panel {
  background-color: #f7faff;
}
.class-size {
  width: 12% !important;
}
</style>