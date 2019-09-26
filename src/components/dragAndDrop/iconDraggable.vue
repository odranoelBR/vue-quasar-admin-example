<template>
  <q-img
    :src="icon"
    class="icon-size cursor-pointer	"
    alt=""
  >
    <q-badge 
      v-if="badgeValue"
      :color="color"
      transparent
      align="bottom"
    >
      {{ badgeValue }}
    </q-badge>  
  </q-img>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: () => 'primary'
    },
    badgeValue: {
      type: String,
      default: () => ''
    }
  }
}
</script>
<style scoped>
 .q-img .q-badge {
   padding: 7px;
   left: 43px;
 }
 .q-img:nth-child(2){
   margin-right: 15px;
 }
 .icon-size {
    width: 70px;
    height: 70px;
}
</style>
