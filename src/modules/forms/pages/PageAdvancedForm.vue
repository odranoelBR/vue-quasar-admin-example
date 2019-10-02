<template>
  <a-card-doc
    toolbar-class="bg-secondary"
    title="Choose your flight"
  >
    <div
      slot="body-one"
      class="q-pa-md"
    >
      <div class="row">
        <div class="col-6">
          <form-filter />
        </div>
      </div>
    </div>

    <div
      slot="body-two"
      class="text-center"
    >
      <q-btn
        color="secondary"
        fab
      >
        Find
      </q-btn>
    </div>
  </a-card-doc>
</template>
<script>
import FormFilter from '@modules/forms/components/FormFilter'
import ACardDoc from 'components/ACardDoc.vue'
import { createSession } from 'src/services/skyscannerService'
//import QStepList from '@modules/forms/components/QStepList'
//import QStepCheckout from '@modules/forms/components/QStepCheckout'
export default {
  components: {
    FormFilter, ACardDoc
  },
  data: () => ({
  }),
  mounted () {
    createSession().then(response => console.log(response))
  }
}
</script>