<template>
  <a-card-doc
    toolbar-class="bg-secondary"
    title="Edit User"
  > 
    <div
      slot="body-one" 
      class="row"
    >
      <div class="col-4">
        <q-select
          v-model="selected"
          filled
          input-debounce="0"
          :options="options"
          hint="Select user to edit"
        />
      </div>
    </div>
    <div
      slot="body-two"
      class="row" 
    >
      <transition
        appear
        :duration="{ enter: 400, leave: 400 }"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeInUp"
      >
        <form-user
          v-if="selected.value"  
          :user="selected.value"
        />
      </transition>
    </div>

    <div
      slot="body-three"
      class="row justify-between"
    >
      <div class="col" />
      <div class="col">
        <dialog-adress
          v-if="selected.value"
          :user="selected.value"
          @save="save"
        />
      </div>
      <div class="col">
        <q-btn
          v-if="selected.value"  
          color="positive"
          class="float-right"
          @click="save"
        >
          save
        </q-btn>
      </div>
    </div>
  </a-card-doc>
</template>
<script type="text/javascript">
import { findAllUsers, saveUser } from 'src/services'
import FormUser from 'components/form/FormUser'
import DialogAdress from 'components/form/DialogAdress' 
import ACardDoc from 'components/ACardDoc.vue'

export default {
  name: "FormSearch",
  components: {
    FormUser, ACardDoc, DialogAdress
  },
  data() {
    return {
      selected: '',
      users: { data: [] }
    };
  },
  computed: {
    options () {
      return this.users.data
        .map(user => ({ label: user.name, value: user }))
    }
  },
  created () {
    this.findAllUsers()
  },
  methods: {
    save () {
      saveUser(this.selected.value)
      .then(() => {
        this.$q.notify({ message: `Save user complete.`, color: 'positive'})
      })
    },
    async findAllUsers () {
      this.users = await findAllUsers()
    }
  }
};
</script>
<style scoped></style>
