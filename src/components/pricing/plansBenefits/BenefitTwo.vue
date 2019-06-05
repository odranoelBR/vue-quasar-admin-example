<template>
 <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>24 Oranges</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  <!-- <q-list bordered separator>
    <q-item>
       <q-item-section>24 Oranges</q-item-section>
    </q-item>
    <q-item>
      <div class="item-content inset">20 Limes</div>
    </q-item>
    <q-item-separator />
    <q-list-header>Berries</q-list-header>
    <q-item>
      <div class="item-content inset">20 Blackberries</div>
    </q-item>
    <q-item>
      <div class="item-content inset">10 Grapes</div>
    </q-item>
  </q-list> -->
</template>
<script type="text/javascript">
export default {
  data() {
    return {};
  }
};
</script>
<style></style>
