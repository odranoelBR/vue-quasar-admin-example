<template>
  <div class="q-pa-md">
    <q-stepper
      ref="stepper"
      v-model="step"
      color="primary"
      header-nav
      animated
    >
      <q-step
        v-for="(step, index) in steps"
        :key="index"
        :name="step.number"
        :title="step.title"
        :caption="step.caption"
        :icon="step.icon"
        :done="step > 2"
      >
        <component :is="step.component" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            color="primary"
            :label="step === 3 ? 'Finish' : 'Continue'"
            @click="$refs.stepper.next()"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            label="Back"
            class="q-ml-sm"
            @click="$refs.stepper.previous()"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>
<script>
import QStepFilter from '@modules/forms/components/QStepFilter'
import QStepList from '@modules/forms/components/QStepList'
import QStepCheckout from '@modules/forms/components/QStepCheckout'
export default {
  components: {
    QStepFilter, QStepList, QStepCheckout
  },
  data: () => ({
    step: 2,
    steps: [
      { number: 1, title: '121', caption: '123', icon: '', component: 'q-step-filter' },
      { number: 2, title: '2', caption: '2', icon: '', component: 'q-step-list' },
      { number: 3, title: '3', caption: '3', icon: '', component: 'q-step-checkout' }
    ]
  })
}
</script>