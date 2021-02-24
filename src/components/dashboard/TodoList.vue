<template>
  <q-list>
    <q-item-label header>
      My Tasks
    </q-item-label>

    <div
      ref="scrollTargetRef"
      class="q-pa-md"
      :style="`max-height: 350px; overflow: auto;`"
    >
      <q-infinite-scroll
        :offset="250"
        :scroll-target="$refs.scrollTargetRef"
        @load="onLoadRef"
      >
        <q-item
          v-for="todo in todosSliced"
          :key="todo.id"
        >
          <q-item-section
            top
            class="col-2 gt-sm"
          >
            <q-item-label class="q-mt-sm">
              {{ todo.id }}
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label
              caption
              class="text-body1"
              lines="1"
            >
              {{ todo.title }}
            </q-item-label>
            <q-item-label
              lines="1"
              class="q-mt-xs text-body2 text-primary text-uppercase"
            >
              <span class="cursor-pointer">Open task</span>
            </q-item-label>
          </q-item-section>

          <q-item-section
            top
            side
          >
            <div class="text-grey-8 q-gutter-xs">
              <q-toggle
                v-model="todo.completed"
                :color="todo.completed ? 'positive' : 'primary'"
                unchecked-icon="clear"
                checked-icon="check"
                @input="update(todo)"
              />
            </div>
          </q-item-section>
        </q-item>

        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-gears
              color="primary"
              size="40px"
            />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </q-list>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    todos: {
      type: Array,
      default: () => ([]),
      required: true
    }
  },
  data: () => ({
    sliceSize: 5
  }),
  computed: {
    todosSliced () {
      return this.todos.slice(0, this.sliceSize)
    }
  },
  methods: {
    ...mapActions(['updateTodo']),
    onLoadRef (index, done) {
      setTimeout(() => {
        this.sliceSize += 5
        done()
      }, 1500);

    },
    update (todo) {
      this.updateTodo(todo)
    }
  }
}
</script>