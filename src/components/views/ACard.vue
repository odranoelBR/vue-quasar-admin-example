<template>
  <q-card class="bg-white">
    <div class="row">
      <div :class="titleSize">
        <q-card class="g-card-title" :class="titleClass">
          <q-card-title>
            <span>{{titulo}}</span>
            <span slot="subtitle">{{subtitulo}}</span>
          </q-card-title>
        </q-card>
      </div>
    </div>
    <q-card-main :class="contentPadding ? 'q-card-main-padding': ''">
      <slot name="content"></slot>
    </q-card-main>
    <q-card-actions :class="actionsClass">
      <slot name="actions"></slot>
    </q-card-actions>
  </q-card>
</template>

<script>
import { QCard, QCardMain, QCardTitle, QCardActions, QIcon } from 'quasar'
export default {
  props: {
    icon: String,
    titulo: String,
    subtitulo: String,
    titleSize: String,
    titleClass: String,
    actionsClass: String,
    contentPadding: Boolean
  },
  components: {
    QCard, QCardMain, QCardTitle, QCardActions, QIcon
  }
}
</script>

<style scoped>
.bg-light {
  padding-left: 2.5%;
}

.g-card-title {
  position: relative;
  bottom: 1vw;
  margin: 0 1vw 0 1vw;
  color: #fff;
}

.q-card-main-padding {
  padding: 0px 50px 50px 50px;
}
</style>
