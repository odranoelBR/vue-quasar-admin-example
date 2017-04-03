<template>
  <div>
    <div class="layout-padding ">
      <div class="card">
        <div class="card-title bg-teal text-white">
          Search Users
        </div>
        <div class="card-content bg-white">
          <div class="flex">
            <div class="width-2of3 gt-bg-width-1of3 sm-auto">
              <q-autocomplete v-model="terms" :delay="0" @search="search" :max-results="4" @selected="selected">
                <q-search v-model="terms" placeholder="Search by name"></q-search>
              </q-autocomplete>
            </div>
          </div>
          <q-transition name="slide">
            <user-form :user="selectedUser" v-show="selectedUser.name"></user-form>
          </q-transition>
        </div>
        <q-transition name="slide">
          <div class="card-actions justify-center flex" v-show="selectedUser.name">
            <div class="width-1of3 sm-width-3of3">
              <button class="primary raised outline fit" @click="save()">Save</button>
            </div>
            <div class="width-1of3 sm-width-3of3">
              <button class="teal raised outline fit"  @click="$refs.modal.$children[0].open()">Check Adress</button>
            </div>
          </div>
        </q-transition>
      </div>
    </div>
    <modal-adress :user="selectedUser" ref="modal"></modal-adress>
  </div>
</template>
<script type="text/javascript">
  import { Utils, Toast } from 'quasar'
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
        setTimeout(() => {
          done(Utils.filter(terms, {field: 'value', list: this.usersParsed}))
        }, 500)
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
        this.$http.jsonplaceholder
          .put(`users/${this.selectedUser.id}`, this.selectedUser)
          .then(response => { Toast.create.positive('Updated successful!') })
      }
    }
  }
</script>
<style>
  #map {
    height: 180px;
  }
</style>
