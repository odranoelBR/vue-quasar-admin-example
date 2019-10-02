<template>
  <form class="q-gutter-sm">
    <div class="row q-gutter-sm">
      <div class="col">
        <q-input
          v-model="from"
          filled
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
          filled
          prefix="To:"
        >
          <template v-slot:prepend>
            <q-icon name="room" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="row q-gutter-sm">
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
      <div class="col-6">
        <q-input
          v-model="startDate"
          filled
          mask="date"
          prefix="Starting Date:"
        >
          <template v-slot:prepend>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="startDate"
                  title="Starting Date"
                  subtitle="Choose"
                  @input="() => $refs.qDateProxy.hide()"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <transition
        appear
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutLeft"
      >
        <div
          v-show="showReturningDate"
          class="col"
        >
          <q-input
            v-model="returnDate"
            filled
            mask="date"
            prefix="Returning Date:"
          >
            <template v-slot:prepend>
              <q-icon
                name="event"
                class="cursor-pointer"
              >
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="returnDate"
                    title="Returning Date"
                    subtitle="Choose"
                    @input="() => $refs.qDateProxy.hide()"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </transition>
    </div>
  </form>
</template>
<script>
export default {
  data: () => ({
    type: 1,
    from: '',
    to: '',
    startDate: '',
    returnDate: ''
  }),
  computed: {
    showReturningDate () {
      return this.type !== 1
    }
  }
}
</script>