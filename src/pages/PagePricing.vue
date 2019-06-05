<template>
  <card-ball
    icon="fa-id-card-o"
    icon-size="36px"
    :title="`Plan model type ${cardType}`"
  >
    <div class="row" slot="content">
      <div class="group inline-block">
        <label>
          <q-radio v-model="cardType" val="Vertical One"></q-radio> Vertical One
        </label>
        <label>
          <q-radio
            v-model="cardType"
            val="Horizontal One"
            class="teal"
          ></q-radio>
          Horizontal One
        </label>
      </div>
    </div>
    <div class="row xs-gutter justify-center" slot="content">
      <div
        class="(auto, index) "
        v-for="(planData, index) in plansData"
        :key="index"
      >
        <component
          :is="componentInstanceBySelectedPlanType"
          :title="planData.title"
          :title-classes="planData.titleClasses"
          :price="planData.price"
          :price-subtitle="planData.priceSubtitle"
          :button-classes="planData.buttonClasses"
          :card-id="planData.cardId"
          v-on:card-selected="cardSelected"
        >
          <div slot="body" class="fit">
            <component :is="planData.planBenefitComponent"></component>
          </div>
        </component>
      </div>
    </div>
  </card-ball>
</template>
<script type="text/javascript">
/* eslint-disable */
  import cardPlanOne from 'components/pricing/cardPlanOne.vue'
  import CardBall from 'components/CardBall.vue'
  import cardPlanTwo from 'components/pricing/cardPlanTwo.vue'
  import benefitOne from 'components/pricing/plansBenefits/benefitOne.vue'
  import benefitTwo from 'components/pricing/plansBenefits/benefitTwo.vue'
  import benefitThree from 'components/pricing/plansBenefits/benefitThree.vue'
  import benefitFour from 'components/pricing/plansBenefits/benefitFour.vue'
  export default {
    name: 'Pricing',
    data () {
      return {
        cardType: 'Vertical One',
        plansData: [
          {
            title: 'Basket Fruit One',
            titleClasses: 'bg-primary',
            price: '59',
            priceSubtitle: 'per month',
            buttonClasses: 'primary',
            cardId: '1',
            planBenefitComponent: 'benefit-one'
          },
          {
            title: 'Basket Fruit Two',
            titleClasses: 'bg-teal',
            price: '39',
            priceSubtitle: 'per month',
            buttonClasses: 'teal',
            cardId: '2',
            planBenefitComponent: 'benefit-two'
          },
          {
            title: 'Basket Fruit Three',
            titleClasses: 'bg-red',
            price: '29',
            priceSubtitle: 'per month',
            buttonClasses: 'red',
            cardId: '3',
            planBenefitComponent: 'benefit-three'
          },
          {
            title: 'Basket Fruit Four',
            titleClasses: 'bg-purple',
            price: '19',
            priceSubtitle: 'per month',
            buttonClasses: 'purple',
            cardId: '4',
            planBenefitComponent: 'benefit-four'
          }
        ]
      }
    },
    components: {
      cardPlanOne,
      benefitOne,
      benefitTwo,
      benefitThree,
      benefitFour,
      cardPlanTwo,
      CardBall
    },
    computed: {
      componentInstanceBySelectedPlanType () {
        return this.cardType === 'Vertical One' ? 'card-plan-one' : 'card-plan-two'
      }
    },
    methods: {
      cardSelected (cardId) {
        Toast.create.positive({html: `Congratulations! You have choose the plan ${cardId}`})
      },
      chooseMostUsedPlan(cardId) {
        return cardId == 1 ? 'animate-bounce shadow-3' : ''
      }
    }
  }
</script>
<style scoped>

</style>
