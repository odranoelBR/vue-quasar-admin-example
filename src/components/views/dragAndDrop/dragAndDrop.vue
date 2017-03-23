<template>
  <div>
    <div class="layout-padding">
      <div class="flex">
        <div class="card">
          <div class="card-title bg-teal text-white">
            Exemple One - Drap Fruits to the cart
          </div>
          <div class="card-content bg-white">
            <div class="flex wrap">
              <div class="card shadow-3" id="left">
                <img src="./img/apple.svg" class="cursor-pointer icon-size " alt="" >
                <img src="./img/pear.svg" class="cursor-pointer icon-size " alt="" >
                <img src="./img/orange.svg" class="cursor-pointer icon-size " alt="" >
                <img src="./img/watermelon.svg" class="cursor-pointer icon-size " alt="" >
                <img src="./img/strawberry.svg" class="cursor-pointer icon-size " alt="" >
              </div>
              <div class="card shadow-3 text-center" id="prices">
                <div v-for="price in prices" class="div-prices">
                  <h5>${{price}}</h5>
                </div>
              </div>
              <div class="" id="cart">
                <div id="right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Dragula from 'dragula/dragula'
  export default {
    name: 'DragAndDrop',
    mounted () {
      Dragula([document.querySelector('#left'), document.querySelector('#right')])
    },
    data () {
      return {
        prices: [5, 3, 2, 4, 7]
      }
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style scoped>
  .card {
    padding: 15px;
    margin-right: 2%;
  }
  h5{
    margin-bottom: 5%;
  }
  #cart {
    background: url("./img/cart.svg") white no-repeat;
    background-size: 300px 300px;
    width: 300px;
    height: 300px;
  }
  #prices {
    width: 82px;
  }
  .div-prices{
    height: 45px;
  }
  #left {
    width: 82px;
  }
  #right{
    margin-left: 87px;
    margin-top: 75px;
    width: 194px;
    height: 111px;
  }

  .icon-size {
    width: 56px;
    height: 57px;

  }

</style>
