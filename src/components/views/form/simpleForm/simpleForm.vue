<template>
  <div class="row">
    <div class="col-md-6 col-lg-5 col-xl-6">
      <card-ball icon="fa-id-card-o" icon-size="36px" title="User Profile">
        <template slot="content">
          <div class="row">
            <div class="col">
              <q-search v-model="terms" placeholder="Search by name">
                <q-autocomplete v-model="terms" :delay="0" @search="search" :max-results="4" @selected="selected">
                </q-autocomplete>
              </q-search>
            </div>
          </div>
          <q-transition name="slide">
            <user-form :user="selectedUser" v-show="selectedUser.name"></user-form>
          </q-transition>
          <div slot="actions" v-show="selectedUser.name" class="row xs-gutter">
            <div class="col-auto">
              <q-btn color="primary" @click="save()">Save</q-btn>
            </div>
            <div class="col">
              <q-btn color="secondary" @click="$refs.modal.$children[0].open()">Check Adress</q-btn>
            </div>
          </div>
        </template>
      </card-ball>
    </div>
    <modal-adress :user="selectedUser" ref="modal"></modal-adress>

  </div>
</template>
<script type="text/javascript">
import { filter, Toast } from 'quasar'
import userForm from './userForm.vue'
import modalAdress from './modalAdress.vue'
export default {
  name: 'Form',
  mounted () {
    this.getUsers()
  },
  data () {
    return {
      terms: '',
      users: [],
      selectedUser: { address: {} }
    }
  },
  computed: {
    usersParsed () {
      return this.users.map(user => {
        return {
          allData: user,
          label: user.name,
          secondLabel: user.email,
          value: user.name
        }
      })
    }
  },
  components: {
    userForm,
    modalAdress
  },
  methods: {
    search (terms, done) {
      done(filter(terms, { field: 'value', list: this.usersParsed }))
    },
    getUsers () {
      this.$http.jsonplaceholder
        .get('users')
        .then(response => { this.users = response.data })
    },
    selected (user) {
      this.selectedUser = user.allData
    },
    save () {
      this.loading = true
      this.$http.jsonplaceholder
        .put(`users/${this.selectedUser.id}`, this.selectedUser)
        .then(response => {
          Toast.create.positive('Updated successful!')
        })
    }
  }
}
</script>
<style>
#map {
  height: 180px;
}
</style>
