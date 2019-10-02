<template>
  <div class="row q-gutter-md">
    <div class="col-auto">
      <q-chip
        slot="body-two"
        class="no-margin"
        square
      >
        <q-avatar
          icon="shopping_cart"
          color="green"
          text-color="white"
        />
        <div>
          $
          <span ref="number" />
        </div>
      </q-chip>
    </div>

    <div class="col">
      <q-btn
        color="green"
        size="12px"
        icon-right="send"
        label="Checkout"
        @click="checkout"
      />
    </div>
  </div>
</template>
<script>
import { CountUp } from "countup.js"

export default {
  props: {
    totalCost: Number
  },
  data: () => ({
    countUp: null
  }),
  watch: {
    totalCost (newValue) {
      this.countUp.update(newValue);
    }
  },
  mounted () {
    this.countUp = new CountUp(this.$refs.number, 0)
    this.countUp.start()
  },
  methods: {
    checkout () {
      this.$emit('checkout', { animation: "cartOut 2s" });
      setTimeout(() => {
        this.$emit('checkout', { animation: "" });

      }, 2100);
    }
  }
}
</script>