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
      <div class="row q-gutter-xl">
        <div class="col-auto">
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

    <drag-bar
      slot="body-two"
      :total-cost="totalCost"
      @pay="move = arguments[0]"
    />
  </a-card-doc>
</template>
<script type="text/javascript">
import Dragula from "dragula/dragula"
import "dragula/dist/dragula.css"
import IconDraggable from '@modules/apps/components/IconDraggable'
import DragBar from '@modules/apps/components/DragBar'
import ACardDoc from 'components/ACardDoc.vue'

export default {
  components: {
    IconDraggable, ACardDoc, DragBar
  },
  data () {
    return {
      dragula: "",
      totalCost: 0,
      move: ""
    };
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
  }
};
</script>

<style scoped>
#cart {
  background: url("~assets/img/cart.svg") white no-repeat;
  background-size: 350px 350px;
  width: 350px;
  height: 350px;
}
#left {
  position: absolute;
  top: 10px;
}
#right {
  margin-left: 87px;
  margin-top: 92px;
  width: 257px;
  height: 130px;
}
</style>
