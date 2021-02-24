<template>
  <a-card-doc
    toolbar-class="bg-secondary"
    title="Drag to cart"
  >
    <div
      slot="body-one"
      style="overflow: hidden;"
    >
      <div id="left">
        <icon-draggable
          v-for="(fruit, index) in fruits"
          :key="index"
          :icon="fruit.icon"
          :badge-value="fruit.value"
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

    <div
      slot="body-three"
      class="row"
    >
      <drag-cart-actions
        class="row"
        :total-cost="totalCost"
        @checkout="move = arguments[0]"
      />
    </div>
  </a-card-doc>
</template>
<script type="text/javascript">
import Dragula from "dragula/dragula"
import "dragula/dist/dragula.css"
import IconDraggable from '@modules/apps/components/IconDraggable'
import DragCartActions from '@modules/apps/components/DragCartActions'
import ACardDoc from 'components/ACardDoc.vue'

export default {
  components: {
    IconDraggable, ACardDoc, DragCartActions
  },
  data: () => ({
    fruits: [
      { icon: 'statics/img/apple.svg', value: 4 },
      { icon: 'statics/img/pear.svg', value: 3 },
      { icon: 'statics/img/orange.svg', value: 2 },
      { icon: 'statics/img/watermelon.svg', value: 4 },
      { icon: 'statics/img/strawberry.svg', value: 7 }
    ],
    dragula: "",
    totalCost: 0,
    move: ""
  }),
  mounted () {
    this.dragula = Dragula([
      document.querySelector("#left"),
      document.querySelector("#right")
    ])
      .on("drop", this.changeTotalCost)
  },
  methods: {
    changeTotalCost (el, container, source) {
      if (source.id === container.id) {
        return;
      }
      source.id === "left"
        ? (this.totalCost += parseInt(el.getAttribute('data-value')))
        : (this.totalCost -= parseInt(el.getAttribute('data-value')));
    }
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
