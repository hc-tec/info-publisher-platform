<template>
  <div class="star-rate">
    <i 
      v-for="i in num" 
      :key="i"
      class="fa fa-star">
    </i>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Star extends Vue {

  @Prop()
  public num: number;

}
</script>
<style scoped>
.star-rate {
  display: inline;
}
.star-rate > * {
  color: gold;
}
</style>