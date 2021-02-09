<template>
  <a-card-doc
    toolbar-class="bg-secondary"
    title="Filter"
    :body-two-padding-off="true"
  >
    <div
      slot="body-one"
      class="row"
    >
      <div class="col-12">
        <q-select
          v-model="selectedType"
          filled
          emit-value
          :options="typesOptions"
          :loading="types.length == 0"
          stack-label
          label="Choose types"
        />
      </div>
      <div class="col-12">
        <q-select
          v-model="selectedMechanic"
          filled
          multiple
          :options="mechanics"
          use-chips
          stack-label
          label="Choose Mechanics"
        />
      </div>
    </div>
    <div slot="body-three">
      <q-btn
        class="fit"
        color="primary"
        @click="search"
      >
        Search
      </q-btn>
    </div>
  </a-card-doc>
</template>
<script>
import ACardDoc from 'components/ACardDoc.vue'

export default {
  components: {
    ACardDoc
  },
  props: {
    types: {
      type: Array,
      default: () => ([])
    },
    mechanics: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    tab: 'Death Knight',
    selectedType: null,
    selectedMechanic: []
  }),
  computed: {
    setOptions () {
      return this.hearthstoneInfo.sets
    },
    typesOptions () {
      return this.types.map(type => ({ label: type, value: type }))
    },
  },
  methods: {
    search () {
      this.$emit('search', this.getQueryParams())
    },
    getQueryParams () {
      let params = new URLSearchParams()
      params.append('type', this.selectedType)
      params.append('pageSize', 12)

      params.forEach((param, key) => {
        if (param == 'null') {
          params.delete(key)
        }
      })

      return params.toString()
    }
  }
}
</script>