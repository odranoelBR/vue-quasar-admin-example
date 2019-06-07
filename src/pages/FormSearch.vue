<template>
  <div />
</template>
<script type="text/javascript">
export default {
  name: "FormSearch",
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    finish() {
    },
    nextStep() {
    },
    previousStep() {
    },
    findUser() {
      this.$http.jsonplaceholder
        .get(`users?username=${this.userName}`)
        .then(response => {
          this.userData = response.data[0];
        });

    },
    populatePhotos() {
    }
  }
};
</script>
<style scoped></style>
