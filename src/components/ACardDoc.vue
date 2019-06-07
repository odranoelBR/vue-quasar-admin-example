
<template>
  <q-card>
    <q-toolbar :class="toolbarClass">
      <section class="text-subtitle1">
        <div class="doc-card-title">
          {{ title }}
        </div>
      </section>
      
      <q-toolbar-title />
    </q-toolbar>

    <q-separator inset />

    <q-card-section class="bg-white">
      <slot name="body-one" />
    </q-card-section>

    <q-separator />

    <q-card-section class="bg-grey-1">
      <slot name="body-two" />
    </q-card-section>

    <q-separator />

    <q-card-section class="bg-white">
      <slot name="body-three" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props:  {
    toolbarClass: {
      default: '',
      type: String,
      required: false 
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      test: false
    };
  }
};
</script>

<style scoped>

.doc-card-title {
  margin-left: -24px;
  padding: 2px 10px 2px 24px;
  background: #e0e0e0;
  color: #616161;
  position: relative;
  border-radius: 3px 5px 5px 0;
}

.doc-card-title:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-top-color: #bebebe;
  border-width: 10px 0 0 12px;
}
</style> 