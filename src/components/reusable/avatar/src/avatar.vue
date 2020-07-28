<template>
  <figure>
    <img 
      v-bind="$attrs" 
      :src="src" />
    <slot></slot>
  </figure>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Avatar extends Vue {
  @Prop({type: String})
  public src: string;
}
</script>
<style scoped>
img {
  border-radius: 50%;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>