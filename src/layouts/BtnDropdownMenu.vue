<template>
  <q-btn-dropdown
    class="shadow-5"
    label="Potter"
  >
    <q-list>
      <q-item
        v-ripple
        clickable
        @click="logout"
      >
        <q-item-section>Exit</q-item-section>

        <q-item-section avatar>
          <q-icon
            color="primary"
            name="exit_to_app"
          />
        </q-item-section>
      </q-item>
      <q-item
        v-ripple
        clickable
        @click="help"
      >
        <q-item-section>Help?</q-item-section>
        <q-item-section avatar>
          <q-icon
            color="primary"
            name="fa fa-question-circle"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>