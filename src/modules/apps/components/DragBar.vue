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
          {{ totalCost ? '' : '0' }}
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
  watch: {
    totalCost (oldValue, newValue) {
      let countUp = new CountUp(
        this.$refs.number,
        oldValue,
        newValue
      );
      countUp.start();
    }
  },
  methods: {
    pay () {
      this.$emit('checkout', { animation: "cartOut 2s" });
      setTimeout(() => {
        this.$emit('checkout', { animation: "" });

      }, 2100);
    }
  }
}
</script>