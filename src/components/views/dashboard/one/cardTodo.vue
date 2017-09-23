<template>
  <q-card class="bg-white">
    <q-card-title class="bg-primary text-white text-center title-todo shadow-1">
      Todo List
      <q-btn slot="right" color="positive" round class="addBtn shadow-6" @click="createTodo">
        <q-icon name="add"></q-icon>
      </q-btn>
    </q-card-title>
    <q-card-main>
      <q-list highlight no-border>
        <q-item v-for="(todo, index) in showingData" :key="index">
          <q-item-side> {{index + 1}} </q-item-side>
          <q-item-main>
            <q-item-tile label>
              <span v-show="todo.completed" class="completed-line">{{todo.title}}</span>
              <q-input v-show="!todo.completed" v-model.lazy="todo.title" class="fit" @change="updateTodo(todo)" />
            </q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-toggle class="item-secondary" icon="done" @input="updateTodo(todo)" v-model="todo.completed"></q-toggle>
          </q-item-side>
          <q-item-side right>
            <q-btn color="red" small round flat @click="removeTodo(todo)">
              <q-icon name="clear"></q-icon>
            </q-btn>
          </q-item-side>
        </q-item>
      </q-list>
    </q-card-main>
  </q-card>
</template>
<script type="text/javascript">
import { Toast } from 'quasar'
export default {
  mounted () {
    this.$http.jsonplaceholder
      .get('todos')
      .then(response => { this.todos = response.data })
  },
  data () {
    return {
      todos: [],
      actualMaxPosition: 5
    }
  },
  computed: {
    showingData () {
      return this.todos.slice(0, this.actualMaxPosition)
    }
  },
  methods: {
    createTodo () {
      this.$http.jsonplaceholder
        .post('todos', {})
        .then(response => { Toast.create.positive('Created todo!') })
    },
    updateTodo (todo) {
      this.$http.jsonplaceholder
        .patch(`todos/${todo.id}`, todo)
        .then(response => { Toast.create.positive('Completed todo!') })
    },
    removeTodo (todo) {
      this.$http.jsonplaceholder
        .delete(`todos/${todo.id}`)
        .then(response => {
          this.todos.splice(todo.__index, 1)
          Toast.create.positive('Deleted todo!')
        })
    }
  }
}
</script>
<style scoped>
.q-card-main {
  padding-top: 1vw;
}

.title-todo {
  max-height: 64px;
}

.addBtn {
  top: 29px;
}

.completed-line {
  text-decoration: line-through;
}
</style>
