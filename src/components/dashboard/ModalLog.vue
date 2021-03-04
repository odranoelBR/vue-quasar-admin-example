<template>
  <div>
    <q-btn
      :icon="icon"
      :color="btnColor"
      @click="$refs.modal.toggle()"
    >
      {{ title }}
    </q-btn>
    <q-dialog
      ref="modal"
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <a-card-doc
        style="width: 75vw; max-width: 90vw;"
        toolbar-class="bg-secondary"
        :title="title"
      >
        <div
          slot="body-one"
          class="row"
        >
          <q-tree
            :nodes="messages"
            node-key="label"
          />
        </div>
        <div
          slot="body-three"
          class="row justify-center q-col-gutter-sm"
        />
      </a-card-doc>
    </q-dialog>
  </div>
</template>
<script>
import ACardDoc from 'components/ACardDoc.vue'

export default {
  components: {
    ACardDoc
  },
  props: {
    messages: { type: Array, default: () => ([]) },
    title: {
      type: String,
      default: ''
    },
    btnColor: {
      type: String,
      default: 'warning'
    },
    icon: {
      type: String,
      default: 'warning'
    }
  }
}
</script>
<style scoped>
</style>
