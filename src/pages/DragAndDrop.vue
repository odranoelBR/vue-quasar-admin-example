<template>
  <div>
    <div class="row row-fruits">
      <div class="col-auto">
        <icon-draggable
          icon="assets/img/apple.svg"
          badge-value="$4"
          col-autoor="green  "
        />
      </div>
      <div class="col-auto">
        <icon-draggable
          icon="assets/img/pear.svg"
          badge-value="$3"
          col-autoor="green  "
        />
      </div>
      <div class="col-auto">
        <icon-draggable
          icon="assets/img/orange.svg"
          badge-value="$2"
          col-autoor="green  "
        />
      </div>
      <div class="col-auto">
        <icon-draggable
          icon="assets/img/watermelon.svg"
          badge-value="$4"
          col-autoor="green  "
        />
      </div>
      <div class="col-auto">
        <icon-draggable
          icon="assets/img/strawberry.svg"
          badge-value="$7"
          col-autoor="green  "
        />
      </div>
    </div>
    <div class="row">
      <img
        src="~assets/img/table.svg"  
        alt=""
      >
    </div>  
    
    <div
      id="cart"
      ref="cart"
      class="text-center"
      :style="move"
    >
      <div id="right " />
      <h5>
        <span
          id="span-price"
          class="label bg-amber text-white"
        >
          <span class="left-detail">Total</span> $<span ref="number" />
        </span>
      </h5>
    </div> 
  </div>
</template>
<script type="text/javascript">
import Dragula from "dragula/dragula"
import CountUp from "countup.js"
import IconDraggable from 'src/components/dragAndDrop/iconDraggable'

export default {
  components: {
    IconDraggable
  }, 
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
.row-fruits{
  position: absolute;
  top: 25px;
}
#cart {
  background: url("~assets/img/cart.svg") white no-repeat;
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

</style>
