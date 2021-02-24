<template>
  <div>
    <q-btn
      :icon="icon"
      :color="btnColor"
      @click="$refs.modal.toggle()"
    >
      Listar erros
    </q-btn>
    <q-dialog
      ref="modal"
      :content-style="{maxWidth: '60vw'}"
    >
      t
    </q-dialog>
  </div>
</template>
<script>
export default {
  props: {
    error: { type: Array, default: () => ([]) },
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
