<template>
  <q-card>
    <q-card-title class="text-center bg-light">
      <h5>{{ title }}</h5>
    </q-card-title>
    <q-card-main class="text-center">
      <h2 class="inline-block">$ {{ price }}</h2>
      <span>{{ priceSubtitle }}</span>
      <div class="row wrap xs-gutter ">
        <div class="col">
          <div class="label bg-faded text-white ">
            Vitamin A
            <span class="right-detail ">
              <q-rating
                :class="buttonClasses"
                style="font-size: 1.5rem"
                :value="randomValueOne"
                :max="7"
                icon="thumb_up"
                readonly
              ></q-rating>
            </span>
          </div>
        </div>
        <div class="col">
          <div class="label bg-faded text-white">
            Vitamin K
            <span class="right-detail">
              <q-rating
                :class="buttonClasses"
                style="font-size: 1.5rem"
                :value="randomValueTwo"
                :max="7"
                icon="thumb_up"
                readonly
              ></q-rating>
            </span>
          </div>
        </div>
        <div class="col">
          <div class="label bg-faded text-white">
            Vitamin B
            <span class="right-detail">
              <q-rating
                :class="buttonClasses"
                style="font-size: 1.5rem"
                :value="randomValueTwo"
                :max="7"
                icon="thumb_up"
                readonly
              ></q-rating>
            </span>
          </div>
        </div>
      </div>
    </q-card-main>
    <q-card-actions>
      <div class="list fit">
        <q-collapsible
          group="somegroup"
          icon="format_list_bulleted"
          label="Check inside for itens"
        >
          <slot name="body"></slot>
        </q-collapsible>
      </div>
    </q-card-actions>
    <div class="card-content bg-white">
      <q-btn
        :color="buttonClasses"
        loader
        class="fit"
        @click="workButton"
        :percentage="progressBtn"
      >
        Choose
      </q-btn>
    </div>
  </q-card>
</template>
<script type="text/javascript">
export default {
  props: [
    "title",
    "titleClasses",
    "price",
    "priceSubtitle",
    "buttonClasses",
    "cardId"
  ],
  data() {
    return {
      progressBtn: 0
    };
  },
  computed: {
    randomValueOne() {
      return Math.floor(Math.random() * 5 + 1);
    },
    randomValueTwo() {
      return Math.floor(Math.random() * 5 + 1);
    },
    randomValueThree() {
      return Math.floor(Math.random() * 5 + 1);
    }
  },
  methods: {
    planSelected() {
      this.$emit("card-selected", this.cardId);
    },
    workButton(event, done) {
      this.progressBtn = 30;
      this.workingButton = setInterval(() => {
        this.progressBtn += parseInt(Math.random() * 12, 10);
        if (this.progressBtn >= 100) {
          this.stopWorkButton();
          done();
        }
      }, 500);
    },
    stopWorkButton(index) {
      if (this.workingButton) {
        clearInterval(this.workingButton);
        this.workingButton = null;
        this.planSelected();
      }
      if (typeof index !== "undefined") {
        this.progressBtn = index;
      }
    }
  }
};
</script>
<style scoped>
h5 {
  font-weight: 300;
  text-decoration: underline;
  margin-bottom: 5%;
}
.q-card {
  width: 332px;
}
</style>
