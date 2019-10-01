<template>
  <div>
    <div class="row">
      <q-btn-toggle
        v-model="type"
        toggle-color="primary"
        :options="[
          {label: 'One-Way', value: 1 },
          {label: 'Round-Trip', value: 2 },
          {label: 'Multi-City', value: 3 }
        ]"
      />
    </div>
    <div class="row">
      <div class="col">
        <q-input />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    type: 1
  })
}
</script>