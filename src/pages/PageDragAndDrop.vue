<template>
  <a-card-doc
    toolbar-class="bg-secondary"
    title="Drag to cart"
  >
    <div slot="body-one">
      <div id="left">
        <icon-draggable
          icon="assets/img/apple.svg"
          badge-value="4"
        />
        <icon-draggable
          icon="assets/img/pear.svg"
          badge-value="3"
        />
        <icon-draggable
          icon="assets/img/orange.svg"
          badge-value="2"
        />
        <icon-draggable
          icon="assets/img/watermelon.svg"
          badge-value="4"
        />
        <icon-draggable
          icon="assets/img/strawberry.svg"
          badge-value="7"
        />
      </div>
      <div class="row">
        <div class="col">
          <img
            src="~assets/img/table.svg"
            alt=""
          >
        </div>
        <div
          id="cart"
          ref="cart"
          class="text-center col"
          :style="move"
        >
          <div id="right" />
        </div>
      </div>
    </div>

    <q-chip
      slot="body-two"
      square
    >
      <q-avatar
        icon="shopping_cart"
        color="green"
        text-color="white"
      />
      <div class="text-5">
        $
        {{ totalCost ? '' : '0' }}
        <span ref="number" />
      </div>
    </q-chip>
  </a-card-doc>
</template>
<script type="text/javascript">
import Dragula from "dragula/dragula"
import { CountUp } from "countup.js"
import IconDraggable from 'src/components/dragAndDrop/iconDraggable'
import ACardDoc from 'components/ACardDoc.vue'

export default {
  components: {
    IconDraggable, ACardDoc
  },
  data () {
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
    totalCost (oldValue, newValue) {
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
  mounted () {
    let vm = this;
    this.dragula = Dragula([document.querySelector("#left"), document.querySelector("#right")])
      .on("drop", (el, container, source) => {
        if (source.id === container.id) {
          return;
        }
        source.id === "left"
          ? (vm.totalCost += parseInt(el.getAttribute('data-value')))
          : (vm.totalCost -= parseInt(el.getAttribute('data-value')));
      });
  },
  methods: {
    pay () {
      let vm = this;
      this.move = { animation: "cartOut 2s" };
      setTimeout(function () {
        vm.move = "";
      }, 2100);
    }
  }
};
</script>

<style scoped>
.row-fruits {
}
#cart {
  background: url("~assets/img/cart.svg") white no-repeat;
  background-size: 350px 350px;
  width: 350px;
  height: 350px;
}

#right {
  margin-left: 87px;
  padding-top: 87px;
  width: 257px;
  height: 111px;
}
</style>
