<template>
  <div class="text-center">
    <span class="tag label text-white rotate rotate-270 shadow-2" :class="tagClasses">
    <q-knob
      class="rotate-90"
      v-model="value"
      :size="size"
      style="font-size: 1.9rem"
      color="#fff"
      :track-color="trackColor"
      :min="min"
      :max="max"
      readonly
      :placeholder="fullPlaceHolder"
    ></q-knob>
    </span>
    <span class="title block" :style="{color: titleColor}">{{title}}</span>
  </div>
</template>

<script type="text/javascript">
  export default {

    props: {
      value: {
        required: true
      },
      size: {
        required: true
      },
      min: {
        type: Number,
        required: true
      },
      max: {
        type: Number,
        required: true
      },
      title: {},
      titleColor: {},
      tagClasses: {},
      trackColor: {},
      placeholderBefore: {}
    },
    computed: {
      fullPlaceHolder () {
        return this.placeholderBefore ? `${this.placeholderBefore}${this.value}` : this.value
      }
    },
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .label.tag{
    margin-left: 0;
    padding-left: 1rem;
    padding-right: 0.8rem;
  }
  .title {
    margin-top: 24px;
    margin-bottom: 20px;
  }

</style>
