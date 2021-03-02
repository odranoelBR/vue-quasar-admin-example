<template>
  <q-card>
    <q-card-section class="bg-blue-grey-2">
      <q-item-label class="text-body1">
        Log {{ data.id }} on date {{ data.dtEnvio }}
      </q-item-label>
      <q-item-label caption>
        Server : {{ data.serverId }}
      </q-item-label>
    </q-card-section>
    <q-card-section class="bg-blue-grey-1">
      <q-list class="q-mt-md">
        <q-item>
          <q-item-section avatar>
            <q-icon
              name="check"
              color="positive"
            />
          </q-item-section>
          <q-item-section>
            Solved
          </q-item-section>
          <q-item-section side>
            <q-chip
              square
              color="secondary"
              text-color="white"
              class="shadow-2"
            >
              {{ data.solved.length }}
            </q-chip>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              name="report_problem"
              color="warning"
            />
          </q-item-section>

          <q-item-section>
            Warning
          </q-item-section>

          <q-item-section side>
            <q-chip
              square
              text-color="white"
              color="secondary"
              class="shadow-2"
            >
              {{ data.warning.length }}
            </q-chip>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon
              name="bug_report"
              color="negative"
            />
          </q-item-section>
          <q-item-section>
            Error
          </q-item-section>
          <q-item-section side>
            <q-chip
              square
              color="secondary"
              text-color="white"
              class="shadow-2"
            >
              {{ data.error.length }}
            </q-chip>
          </q-item-section>
        </q-item>
      </q-list>
      <p class="text-faded text-center" />
    </q-card-section>
    <q-separator inset />
    <q-card-actions
      class="bg-secondary text-white row text-center"
      style="min-height: 42px"
    >
      <div class="col">
        <modal-log
          v-if="data.warning.length > 0"
          btn-color="warning"
          icon="warning"
          title="List Warning"
          :criticas="data.warning"
        />
      </div>
      <div class="col">
        <modal-log
          v-if="data.error.length > 0"
          btn-color="negative"
          icon="delete"
          title="List Errors"
          :erros="data.error"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>
<script>
import ModalLog from 'components/dashboard/ModalLog'
export default {
  components: {
    ModalLog
  },
  props: {
    data: {
      required: true,
      type: Object,
      default: () => ({})
    }
  }
}
</script>