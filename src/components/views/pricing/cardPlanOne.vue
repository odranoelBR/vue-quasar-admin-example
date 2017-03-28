<template>
  <div class="card text-center">
    <div class="card-title no-padding ">
      <span class="label pointing-down text-white fit no-margin" :class="titleClasses">
        <h5 class="">{{title}}</h5>
      </span>
    </div>
    <div class="card-content bg-white" >
      <h3>$ {{price}}</h3>
      <h6 class="text-italic">{{priceSubtitle}}</h6>
    </div>
    <div class="card-actions">
      <slot name="body"></slot>
    </div>
    <div class="card-content bg-white">
      <button :class="buttonClasses" class="outline fit" @click="planSelected()">Choose</button>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {
  props: ['title', 'titleClasses', 'price', 'priceSubtitle', 'buttonClasses', 'cardId'],
  data () {
    return {}
  },
  methods: {
    planSelected () {
      this.$emit('card-selected', this.cardId)
    }
  }
}
</script>
<style scoped>
  .label{
    min-height: 50px;
  }
  h5{
    font-weight: 300;
    flex: 1 1 auto;
  }
  h3, h6{
    font-weight: 300;
  }
  .label.pointing-up:before, .label.pointing-right:before, .label.pointing-down:before, .label.pointing-left:before {
    width: 1.4rem;
    height: 1.4rem;
  }
  .card {
    width: 332px;
  }
</style>
