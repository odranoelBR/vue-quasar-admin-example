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
      :content-style="{maxWidth: '60vw'}"
    >
      <a-card-doc
        toolbar-class="bg-secondary"
        :title="title"
      >
        <div
          slot="body-one"
          class="row"
        >
          <div class="col-4" />
        </div>
        <div
          slot="body-two"
          class="row"
        >
          asd
        </div>

        <div
          slot="body-three"
          class="row justify-center q-col-gutter-sm"
        >
          <div class="col-auto" />
          <div class="col-auto" />
        </div>
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
    error: { type: Array, default: () => ([]) },
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
