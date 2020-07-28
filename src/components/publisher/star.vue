<template>
  <div class="feedback__element">   
      <label class="label" :for="label">{{ label }}:</label>
      <div class="input" ref="rateContent">
        <i 
          v-for="i in 5" 
          :key="i"
          class="fa fa-star-o"
          @mouseenter="rate(i)"
          @mouseleave="clearRate"
          @click="setRate(i)">
        </i>
      </div>
      <p class="rate-text" v-if="text">{{ text }}</p>
      <p class="rate-text" v-else>{{ sureText }}</p>
    </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { rateText } from '../../utils/store'
@Component
export default class Star extends Vue {

  @Prop({default: 0, type: Number})
  public star: number;

  @Prop({default: '评分', type: String})
  public label: string;

  public text: string = '';

  public sureText: string = '';

  public rate(index: number) {
    this.text = rateText[5 - index];
  }

  public clearRate(index: number) {
    this.text = '';
  }

  public setRate(index: number) {
    const stars = (this.$refs.rateContent as HTMLDivElement).children;
    for(let i=0;i<=4;i++) {
      (stars[i] as HTMLElement).style.color = null;
    }
    for(let i=4;i>index-2;i--) {
      (stars[i] as HTMLElement).style.color = 'gold';
    }
    this.sureText = rateText[5 - index];
  }

}
</script>
<style scoped>
.feedback__element {
  position: relative;
}

.label {
  color: #666;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  width: 60px;
  text-align: right;
  margin-right: 10px;
}
.rate-text {
  color: #666;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
.input {
  position: relative;
  display: inline-flex;
  width: 70%;
  flex-flow: row-reverse;
  justify-content: flex-end;
}
.input > * {
  font-size: 1.4em;
  padding-right: 5px;
  cursor: pointer;
  transition: all .2s;
}
.input > *:hover,
.input > *:hover ~ i {
  color: gold;
}
.input > *:hover {
  transform: scale(1.3);
}
</style>