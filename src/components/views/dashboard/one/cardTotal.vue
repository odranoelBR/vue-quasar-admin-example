<template>
  <q-card class="bg-white animate-scale">
    <div class="row justify">
      <div class="col-title fit row">
        <div class="col">
          <q-card class="g-card-title" :class="titleClass">
            <q-card-title class="">
              <q-icon size="45px" class="text-center" :name="icon" v-if="icon"></q-icon>
            </q-card-title>
          </q-card>
        </div>
        <div class="col self-end text-right">
          <h5>{{conteudo}}</h5>
        </div>
      </div>
    </div>
    <q-card-main class="no-padding no-margin text-right">
      <hr>
      <p class="light-paragraph">{{titulo}}</p>
    </q-card-main>
  </q-card>
</template>

<script>
import { QCard, QCardMain, QCardTitle, QCardActions, QIcon } from 'quasar'
export default {
  props: {
    icon: String,
    titulo: String,
    subtitulo: String,
    titleClass: String,
    conteudo: Number
  },
  components: {
    QCard, QCardMain, QCardTitle, QCardActions, QIcon
  }
}
</script>

<style scoped>
.g-card-title {
  position: relative;
  bottom: 2vw;
  color: #fff;
  width: 75px;
  height: 75px;
  box-shadow: 0 6px 6px -3px rgba(59, 89, 178, .2), 0 10px 14px 1px rgba(59, 89, 178, .14), 0 4px 18px 3px rgba(59, 89, 178, .12)
}

.col-title {
  margin-left: 1vw;
  margin-right: 1.8vw;
  height: 70px !important;
}

.q-card-main-padding {
  padding: 0px 50px 50px 50px;
}

hr {
  color: #555;
  width: 85%;
  opacity: .2;
}

.light-paragraph {
  padding-right: 2vw;
  padding-bottom: 0.5vw;
}
</style>
