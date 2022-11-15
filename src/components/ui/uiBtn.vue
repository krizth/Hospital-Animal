<template>
  <q-btn text-color="white" :class="{'positive':$props?.positive,'negative':!$props?.positive}" no-caps v-bind="$attrs" />

</template>

<script>
export default {
  name: 'uiBtn',
  props:{
    positive:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.positive{
  background-color: rgba(85, 159, 190, 0.82);
}
.negative{
  background-color: $negative;
}

</style>
