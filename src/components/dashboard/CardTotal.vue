<template>
  <q-card class="bg-white animate-scale">
    <div class="row justify">
      <div class="col-title fit row">
        <div class="col">
          <q-card
            class="g-card-title"
            :class="titleClass"
          >
            <q-card-section class="">
              <q-icon
                v-if="icon"
                size="45px"
                :name="icon"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="col text-right">
          <h5>{{ conteudo }}</h5>
        </div>
      </div>
    </div>
    <q-card-section class="no-padding text-right">
      <hr>
      <p class="light-paragraph q-pr-lg q-pb-sm">
        {{ titulo }}
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    icon: String,
    titulo: String,
    subtitulo: String,
    titleClass: String,
    conteudo: Number
  }
};
</script>

<style scoped>
.g-card-title {
  position: relative;
  bottom: 1vw;
  color: #fff;
  width: 75px;
  height: 75px;
  box-shadow: 0 6px 6px -3px rgba(59, 89, 178, 0.2),
    0 10px 14px 1px rgba(59, 89, 178, 0.14),
    0 4px 18px 3px rgba(59, 89, 178, 0.12);
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
  opacity: 0.2;
}
</style>
