<template>
  <div>
    <q-card class="bg-white ">
      <q-card-title class="bg-blue" @click="test = !test">
        <q-icon :name="icon" class="text-white text-center" :size="iconSize"></q-icon>

        <span class="caption" slot="right">ASas</span>
      </q-card-title>

      <q-card-main>
        testse
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
.q-card-primary {
  width: 60px;
  border-radius: 50%;
  height: 60px;
  margin-left: 30px;
  padding: 3px;
  box-shadow: 0 6px 6px -3px rgba(59, 89, 178, .2), 0 10px 14px 1px rgba(59, 89, 178, .14), 0 4px 18px 3px rgba(59, 89, 178, .12);
}

.q-card-primary+.q-card-main {
  padding-top: 20px;
}

span {
  position: relative;
}

.q-card-primary>.col {
  text-align: center;
  margin-right: 15px;
}
</style>
