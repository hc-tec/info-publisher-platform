<template>
  <button 
    class="light-button" 
    v-on="$listeners"
    :style="[bgColor]">
    <slot></slot>
  </button>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({type: Boolean, default: false})
  public light: boolean;

  get bgColor() {
    return {
      backgroundColor: this.light ? 'transparent' : '#56baed',
      color: this.light ? 'black' : 'white',
      boxShadow: this.light ? '0 10px 30px 0 rgba(167, 169, 170, 0.4)' : '0 10px 30px 0 rgba(95,186,233,0.4)'
    }
  }
}
</script>
<style scoped>
.light-button {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  border-radius: 5px 5px 5px 5px;
  transition: all 0.1s;
}
.light-button:active {
  transform: scale(0.9);
}
</style>