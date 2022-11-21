<template>
  <q-card class="card">
    <q-card-section class="text-left">
      <div class="card-title">
        <slot name="title"> Card Title </slot>
        <div class="absolute-right">
          <slot name="close"><q-btn round dense flat icon="ion-close" /></slot>
        </div>
      </div>
      <q-separator />
    </q-card-section>
    <q-card-section>
      <div class="q-mx-md q-my-sm">
        <slot name="body"> </slot>
      </div>
    </q-card-section>
    <slot name="custom-actions">
      <q-card-actions align="center">
        <slot name="actions"> </slot>
      </q-card-actions>
    </slot>
  </q-card>
</template>

<script>
export default {
  name: 'uiCard',
};
</script>

<style scoped lang="scss">
.card-title {
  font-size: 20px;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 3px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.card {
  border-radius: 12px;
  background-color: #adcbd61a;
}
</style>
