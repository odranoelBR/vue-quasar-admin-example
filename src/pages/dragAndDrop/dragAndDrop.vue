<template>
  <div>
    <div class="row">
      <div class="col">
        <card-example-one></card-example-one>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <card-example-two></card-example-two>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import cardExampleOne from "./exempleOne/cardExampleOne.vue";
import cardExampleTwo from "./exampleTwo/cardExampleTwo.vue";
export default {
  name: "DragAndDrop",
  components: {
    cardExampleOne,
    cardExampleTwo
  }
};
</script>
<style scoped></style>
