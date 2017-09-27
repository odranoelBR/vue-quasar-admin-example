<template>
  <q-card class="bg-white">
    <q-card-title class="bg-primary text-white text-center title-todo shadow-1">
      Todo list ( last added )
      <q-btn slot="right" color="positive" round class="addBtn shadow-6" @click="openDialogToCreateTodo">
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
              <q-input v-show="!todo.completed" v-model.lazy="todo.title" class="fit" />
            </q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-toggle class="item-secondary" icon="done" v-model="todo.completed"></q-toggle>
          </q-item-side>
          <q-item-side right>
            <q-btn color="red" small round flat @click="removeTodo(todo, index)">
              <q-icon name="clear"></q-icon>
            </q-btn>
          </q-item-side>
          <q-item-side right>
            <q-btn color="positive" small round flat @click="updateTodo(todo)">
              <q-icon name="save"></q-icon>
            </q-btn>
          </q-item-side>
        </q-item>
      </q-list>
    </q-card-main>
  </q-card>
</template>
<script type="text/javascript">
import { Toast, Dialog } from 'quasar'
export default {
  mounted () {
    this.$http.jsonplaceholder
      .get('todos')
      .then(response => { this.todos = response.data })
  },
  data () {
    return {
      todos: [],
      max: 5
    }
  },
  computed: {
    showingData () {
      return this.todos.slice(0, this.max)
    }
  },
  methods: {
    openDialogToCreateTodo () {
      Dialog.create({
        title: 'Creating new todo...',
        form: {
          title: { type: 'text', label: 'Title' }
        },
        buttons: [
          'Cancel',
          {
            label: 'Ok',
            handler: (data) => {
              this.createTodo(data)
            }
          }
        ]
      })
    },
    createTodo (data) {
      data.completed = false
      this.$http.jsonplaceholder
        .post('todos', data)
        .then(response => {
          this.todos.unshift(response.data)
          Toast.create.positive('Created todo!')
        })
    },
    updateTodo (todo) {
      this.$http.jsonplaceholder
        .patch(`todos/${todo.id}`, todo)
        .then(response => { Toast.create.positive('Completed todo!') })
    },
    removeTodo (todo, index) {
      console.log(index)
      this.$http.jsonplaceholder
        .delete(`todos/${todo.id}`)
        .then(response => {
          this.todos.splice(index, 1)
          Toast.create.positive('Deleted todo!')
        })
        .catch(() => {
          Toast.create.negative('Problem deleting this todo!')
        })
    }
  }
}
</script>
<style scoped>
.q-card {
  min-height: 475px;
}

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
