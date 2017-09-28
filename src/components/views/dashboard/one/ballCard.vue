<template>
  <div>
    <q-card class="bg-white">
      <div class="q-card-primary q-card-container">
        <div class="row text-center">
          <div class="col-auto title bg-blue">
            <q-icon :name="icon" class="text-white text-center" :size="iconSize"></q-icon>
          </div>
          <div class="col">
            <span class="light-paragraph">{{title}} </span>
          </div>
        </div>

      </div>
      <q-card-main>
        <slot name="content"></slot>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    iconSize: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    titleClass: {
      type: String,
      default () { return 'bg-blue' }
    }
  },
  data () {
    return {
      test: false
    }
  }
}
</script>

<style scoped>
.title {
  width: 60px;
  border-radius: 0 0 50% 50%;
  height: 60px;
  margin-left: 30px;
  padding: 3px;
  box-shadow: 0 6px 6px -3px rgba(59, 89, 178, .2), 0 10px 14px 1px rgba(59, 89, 178, .14), 0 4px 18px 3px rgba(59, 89, 178, .12);
}

.q-card-primary {
  padding: 0;
}

.q-card-primary+.q-card-main {
  padding-top: 20px;
}

span {
  border-bottom: 1px solid;
}
</style>
