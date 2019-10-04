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
          v-model="filters.adventure"
          filled
          multiple
          :options="adventureOptions"
          use-chips
          stack-label
          label="Choose adventures"
        />
      </div>
      <div class="col-12">
        <q-input />
      </div>
      <div class="col-12">
        <q-input />
      </div>
    </div>

    <q-tabs
      slot="body-two"
      v-model="tab"
    >
      <q-tab
        v-for="(element, index) in classes"
        :key="index"
        :name="element"
        :label="element"
      />
    </q-tabs>
  </a-card-doc>
</template>
<script>
import ACardDoc from 'components/ACardDoc.vue'

export default {
  components: {
    ACardDoc
  },
  props: {
    hearthstoneInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    tab: 'Death Knight',
    filters: {
      adventure: []
    }
  }),
  computed: {
    classes () {
      return this.hearthstoneInfo.classes
    },
    adventureOptions () {
      return this.hearthstoneInfo.wild
    }
  },
  watch: {
    tab: {
      immediate: true,
      handler (newValue) {
        this.$emit('choosedClass', newValue)
      }
    }
  },
  created () {
    this.$watch(vm => vm.filters, function () {
      this.$emit('filters', this.filters)
    }, { deep: true })
  }
}
</script>