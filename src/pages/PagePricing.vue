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

        <div slot="body-three">
          <q-btn :color="planData.buttonClasses" outline class="fit" @click="cardSelected(planData.cardId)"
                  >Choose</q-btn>
        </div>
      </a-card-doc>

      </div>
  </div>
 
</template>
<script type="text/javascript">
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
            titleClasses: 'bg-teal',
            price: '39',
            priceSubtitle: 'per month',
            buttonClasses: 'teal',
            cardId: '2',
            planBenefitComponent: 'benefit-two'
          },
          {
            title: 'Basket Fruit Three',
            titleClasses: 'bg-warning',
            price: '29',
            priceSubtitle: 'per month',
            buttonClasses: 'warning',
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
      BenefitOne,
      BenefitTwo,
      BenefitThree,
      BenefitFour,
      ACardDoc
    },
    methods: {
      cardSelected (cardId) {
        this.$q.notify({ message: `Congratulations! You have choose the plan ${cardId}`, color: 'positive'})
      }
    }
  }
</script>
<style scoped>
.div-price > h3, h6 {
      margin: 1rem 0 1rem;
}
</style>
