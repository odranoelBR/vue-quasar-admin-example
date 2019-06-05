<template>

  <div class="row q-gutter-md">
      <div
      class="col"
      v-for="(planData, index) in plansData"
      :key="index"
    >
      <a-card-doc
        :toolbar-class="planData.titleClasses"
        :title="planData.title"
      > 
        <div slot="body-one" class="text-center div-price" >
          <h3 class="text-weight-light"> $ {{planData.price}}</h3>
          <h6 class="text-weight-light text-italic">per month</h6>
        </div>

        <component :is="planData.planBenefitComponent" slot="body-two"></component>
      </a-card-doc>

      </div>
  </div>
   
    <!-- <div class="row xs-gutter justify-center" slot="content">
    
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
    </div> -->
</template>
<script type="text/javascript">
/* eslint-disable */
  import ACardDoc from 'components/ACardDoc.vue'
  import BenefitOne from 'components/pricing/plansBenefits/BenefitOne.vue'
  import BenefitTwo from 'components/pricing/plansBenefits/BenefitTwo.vue'
  import BenefitThree from 'components/pricing/plansBenefits/BenefitThree.vue'
  import BenefitFour from 'components/pricing/plansBenefits/BenefitFour.vue'
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
            titleClasses: 'bg-primary',
            price: '39',
            priceSubtitle: 'per month',
            buttonClasses: 'teal',
            cardId: '2',
            planBenefitComponent: 'benefit-two'
          },
          {
            title: 'Basket Fruit Three',
            titleClasses: 'bg-primary',
            price: '29',
            priceSubtitle: 'per month',
            buttonClasses: 'red',
            cardId: '3',
            planBenefitComponent: 'benefit-three'
          },
          {
            title: 'Basket Fruit Four',
            titleClasses: 'bg-primary',
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
      BenefitOne,
      BenefitTwo,
      BenefitThree,
      BenefitFour,
      ACardDoc
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
.div-price > h3, h6 {
      margin: 1rem 0 1rem;
}
</style>
