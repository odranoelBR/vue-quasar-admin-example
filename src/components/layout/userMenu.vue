<template>
  <q-card class="bg-white text-black" id="menu">
    <q-card-main>
      <div class="quote">
        <div class="row">
          <div class="col-4">
          </div>
          <div class="col">
            <h5>{{nome}}</h5>
            <h6 class="text-light">{{email}}</h6>
          </div>
        </div>
      </div>
      <div class="row">
        <q-list highlight no-border class="text-primary uppercase fit">
          <q-item class="cursor-pointer">
            <q-item-main label="Alterar Senha" />
            <q-item-side right>
              <q-item-tile icon="arrow_forward" color="tertiary" />
            </q-item-side>
          </q-item>
        </q-list>
      </div>
      <div class="text-right">
        <q-btn color="faded" outline @click="logout">Sair</q-btn>
      </div>
    </q-card-main>
  </q-card>
</template>
<script>
import { QBtn, QList, QItemTile, QItem, QItemSide, QItemMain, QCardMain, QCard } from 'quasar'
export default {
  props: {
    nome: String,
    email: String
  },
  components: { QBtn, QList, QItemTile, QItem, QItemSide, QItemMain, QCardMain, QCard },
  methods: {
    logout () {
      this.$emit('logout')
    }
  }
}
</script>
<style scoped>
#menu {
  position: absolute;
  top: -0.5vw;
  z-index: 3000;
  right: 0px;
  width: 380px;
}

img {
  width: 86px;
  border-radius: 50%;
}

.quote {
  border-left: 5px solid #7FD7FB !important;
}
</style>
