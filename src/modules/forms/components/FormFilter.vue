<template>
  <form>
    <div class="row">
      <q-btn-toggle
        v-model="type"
        toggle-color="primary"
        :options="[
          {label: 'One-Way', value: 1 },
          {label: 'Round-Trip', value: 2 }
        ]"
      />
    </div>
    <div class="row q-gutter-sm">
      <div class="col">
        <q-input
          v-model="from"
          standout
          prefix="From:"
        >
          <template v-slot:prepend>
            <q-icon name="room" />
          </template>
        </q-input>
      </div>
      <div class="col">
        <q-input
          v-model="to"
          standout
          prefix="To:"
        >
          <template v-slot:prepend>
            <q-icon name="room" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="row">
      <div class="col"/>
      <div class="col"/>
    </div>
  </form>
</template>
<script>
export default {
  data: () => ({
    type: 1,
    from: '',
    to: ''
  })
}
</script>