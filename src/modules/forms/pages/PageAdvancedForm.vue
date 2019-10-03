<template>
  <div>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab
            v-for="(element, index) in classes"
            :key="index"
            :name="element"
            :label="element"
          />
        </q-tabs>
      </template>
      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel
            v-for="(element, index) in classes"
            :key="index"
            :name="element"
          >
            <card-list :cards="cardsByClass" />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>
<script>
import CardList from '@modules/forms/components/CardList'
import { info, getByClass } from 'src/services/hearthstoneService'
export default {
  components: {
    CardList
  },
  data: () => ({
    tab: '',
    splitterModel: 20,
    hearthstoneInfo: {},
    cardsByClass: []
  }),
  computed: {
    classes () {
      return this.hearthstoneInfo.classes
    }
  },
  watch: {
    tab (newValue) {
      getByClass(newValue).then(response => this.cardsByClass = response.data)
    }
  },
  mounted () {
    info().then(response => this.hearthstoneInfo = response.data)
  }
}
</script>