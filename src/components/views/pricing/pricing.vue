<template>
  <div>
    <div class="layout-padding">
      <div class="flex wrap gutter">
        <div class="width-1of4 ">
          <card-plan-one
            title="Basket Fruit One"
            title-classes="bg-primary"
            price="19"
            price-subtitle="per month"
            button-classes="primary outline fit"
            card-id="1"
            v-on:card-selected="cardSelected"
          >
            <div slot="body" class="fit">
              <div class="list ">
                <q-collapsible icon="inbox" label="Inbox">
                  <div class="item" v-for="n in 3">
                    <i class="item-primary">mail</i>
                    <div class="item-content">
                      Email {{ n + 1 }}
                    </div>
                  </div>
                  <q-collapsible icon="favorites" label="Favorites">
                    <div class="item" v-for="n in 3">
                      <i class="item-primary">mail</i>
                      <div class="item-content">
                        Favorite {{ n + 1 }}
                      </div>
                    </div>
                  </q-collapsible>
                </q-collapsible>
                <q-collapsible icon="send" label="Sent">
                  <div class="item" v-for="n in 3">
                    <i class="item-primary">mail</i>
                    <div class="item-content">
                      Email {{ n + 1 }}
                    </div>
                  </div>
                </q-collapsible>
                <q-collapsible icon="delete" label="Trash">
                  <div class="item" v-for="n in 3">
                    <i class="item-primary">mail</i>
                    <div class="item-content">
                      Email {{ n + 1 }}
                    </div>
                  </div>
                </q-collapsible>
              </div>
            </div>
          </card-plan-one>
        </div>
        <div class="width-1of4">
          <card-plan-one
            title="Basket Fruit Two"
            title-classes="bg-teal"
            price="29"
            price-subtitle="per month"
            button-classes="teal outline fit"
            card-id="2"
            v-on:card-selected="cardSelected"
          >
            <div slot="body" class="fit">
              <div class="list">
                <div class="item">
                  <div class="item-content inset">
                    List Item
                  </div>
                </div>
                <hr class="inset">
                <div class="list-label inset">Inset List Label</div>
                <div class="item" v-for="n in 2">
                  <div class="item-content inset">
                    List Item
                  </div>
                </div>
                <hr class="inset">
                <div class="item">
                  <div class="item-content inset">
                    List Item
                  </div>
                </div>
              </div>
            </div>
          </card-plan-one>
        </div>
        <div class="width-1of4">
          <card-plan-one
            title="Basket Fruit Three"
            title-classes="bg-red"
            price="39"
            price-subtitle="per month"
            button-classes="red outline fit"
            card-id="3"
            v-on:card-selected="cardSelected"
          >
            <div slot="body" class="fit">
              <div class="list">
                <div class="item two-lines" v-for="n in 3">
                  <i class="item-primary">mail</i>
                  <div class="item-content">
                    <div>john@doe.com</div>
                    <div>Personal</div>
                  </div>
                </div>
              </div>
            </div>
          </card-plan-one>
        </div>
        <div class="width-1of4">
          <card-plan-one
            title="Basket Fruit Four"
            title-classes="bg-purple"
            price="79"
            price-subtitle="per month"
            button-classes="purple outline fit"
            card-id="4"
            v-on:card-selected="cardSelected"
          >
            <div slot="body" class="fit">
              <div class="list">
                <div class="item two-lines" v-for="n in 3">
                  <div class="item-primary bg-primary text-white">
                    <i>assignment</i>
                  </div>
                  <div class="item-content has-secondary">
                    <div>Vacation</div>
                    <div>February 22, 2016</div>
                  </div>
                  <i class="item-secondary">info</i>
                </div>
              </div>
            </div>
          </card-plan-one>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cardPlanOne from './cardPlanOne.vue'
  import { Toast } from 'quasar'
  export default {
    data () {
      return {}
    },
    components: {
      cardPlanOne
    },
    methods: {
      cardSelected (cardId) {
        Toast.create.positive({html: `Congratulations! You have choose the plan ${cardId}`})
      }
    }
  }
</script>

<style scoped>

</style>
