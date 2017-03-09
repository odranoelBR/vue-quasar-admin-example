<template>
  <div>
    <div class="layout-padding">
      <div class="row wrap gutter">
        <div class="auto" v-for="planData in plansData">
          <card-plan-one
            :title="planData.title"
            :title-classes="planData.titleClasses"
            :price="planData.price"
            :price-subtitle="planData.priceSubtitle"
            :button-classes="planData.buttonClasses"
            :card-id="planData.cardId"
            v-on:card-selected="cardSelected"
            :class="chooseMostUsedPlan(planData.cardId)"
          >
            <div slot="body" class="fit">
              <component :is="planData.planBenefitComponent"></component>
            </div>
          </card-plan-one>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import cardPlanOne from './cardPlanOne.vue'
  import benefitOne from './plansBenefits/benefitOne.vue'
  import benefitTwo from './plansBenefits/benefitTwo.vue'
  import benefitThree from './plansBenefits/benefitThree.vue'
  import benefitFour from './plansBenefits/benefitFour.vue'
  import { Toast } from 'quasar'
  export default {
    data () {
      return {
        plansData: [
          {
            title: 'Basket Fruit One',
            titleClasses: 'bg-primary',
            price: '59',
            priceSubtitle: 'per month',
            buttonClasses: 'primary outline fit',
            cardId: '1',
            planBenefitComponent: 'benefit-one'
          },
          {
            title: 'Basket Fruit Two',
            titleClasses: 'bg-teal',
            price: '39',
            priceSubtitle: 'per month',
            buttonClasses: 'teal outline fit',
            cardId: '2',
            planBenefitComponent: 'benefit-two'
          },
          {
            title: 'Basket Fruit Three',
            titleClasses: 'bg-red',
            price: '29',
            priceSubtitle: 'per month',
            buttonClasses: 'red outline fit',
            cardId: '3',
            planBenefitComponent: 'benefit-three'
          },
          {
            title: 'Basket Fruit Four',
            titleClasses: 'bg-purple',
            price: '19',
            priceSubtitle: 'per month',
            buttonClasses: 'purple outline fit',
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
      benefitFour
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
<style>
</style>
