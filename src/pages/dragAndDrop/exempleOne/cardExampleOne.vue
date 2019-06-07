<template>
  <card-ball
    icon="fa-id-card-o"
    icon-size="36px"
    title="Exemple One - Drap Fruits to the cart"
  >
    <div
      slot="content"
      class="row wrap"
    >
      <div
        id="left"
        class="card shadow-3 no-margin"
      >
        <q-btn
          class="relative-position no-padding"
          :value="4"
        >
          <img
            src="./img/apple.svg"
            class=" icon-size"
            alt=""
          >
          <span class="floating label bg-primary text-white">$5</span>
        </q-btn>
        <q-btn class="relative-position no-padding">
          <img
            src="./img/pear.svg"
            class=" icon-size "
            alt=""
          >
          <span class="floating label bg-primary text-white">$3</span>
        </q-btn>
        <q-btn class="relative-position no-padding">
          <img
            src="./img/orange.svg"
            class=" icon-size "
            alt=""
          >
          <span class="floating label bg-primary text-white">$2</span>
        </q-btn>
        <q-btn class="relative-position no-padding">
          <img
            src="./img/watermelon.svg"
            class=" icon-size "
            alt=""
          >
          <span class="floating label bg-primary text-white">$4</span>
        </q-btn>
        <q-btn class="relative-position no-padding">
          <img
            src="./img/strawberry.svg"
            class=" icon-size "
            alt=""
          >
          <span class="floating label bg-primary text-white">$7</span>
        </q-btn>
      </div>
      <div
        id="cart"
        ref="cart"
        class="text-center"
        :style="move"
      >
        <h5>
          <span
            id="span-price"
            class="label bg-amber text-white"
          >
            <span class="left-detail">Total</span> $<span ref="number" />
          </span>
        </h5>
        <div id="right" />
      </div>
      <div
        v-show="totalCost > 0"
        class="col self-end"
      >
        <q-btn
          color="green raised"
          @click="pay()"
        >
          Pay
        </q-btn>
      </div>
    </div>
  </card-ball>
</template>

<script>
import Dragula from "dragula/dragula";
import CountUp from "countup.js";
export default {
  data() {
    return {
      dragula: "",
      totalCost: 0,
      options: {
        separator: "."
      },
      move: ""
    };
  },
  watch: {
    totalCost(newValue, oldValue) {
      /* eslint-disable no-new */
      let countUp = new CountUp(
        this.$refs.number,
        oldValue,
        newValue,
        0,
        1.5,
        this.options
      );
      countUp.start();
    }
  },
  mounted() {
    let vm = this;
    this.dragula = Dragula([
      document.querySelector("#left"),
      document.querySelector("#right")
    ]).on("drop", (el, container, source) => {
      if (source.id === container.id) {
        return;
      }
      source.id === "left"
        ? (vm.totalCost += parseInt(el.value))
        : (vm.totalCost -= parseInt(el.value));
    });
  },
  methods: {
    pay() {
      let vm = this;
      this.move = { animation: "cartOut 2s" };
      setTimeout(function() {
        vm.move = "";
      }, 2100);
    }
  }
};
</script>

<style scoped>
.card {
  margin-right: 2%;
}
#cart {
  background: url("img/cart.svg") white no-repeat;
  background-size: 300px 300px;
  width: 300px;
  height: 320px;
}
#span-price {
  margin-top: 16px;
  margin-left: 166px;
  width: 132px;
}
#left {
  padding: 15px;
  width: 100px;
}
#right {
  margin-left: 87px;
  margin-top: 20px;
  width: 194px;
  height: 111px;
}
.icon-size {
  width: 56px;
  height: 57px;
}
</style>
