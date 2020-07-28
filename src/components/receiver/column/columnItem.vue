<template>
  <div class="column-item" ref="columnItem">
    <card :card="column" />
    <neu-button 
      class="subscribe-btn"
      size="small"
      @click="handleClick">+ 订阅</neu-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import card from '../../reusable/animalIntroductionCard/src/card.vue'
import Card from '../../reusable/animalIntroductionCard/interface/card'

@Component({
  components: {
    card
  }
})
export default class ColumnItem extends Vue {
  @Prop()
  public column!: Card;

  @Prop({type: Number})
  public index: number;

  handleClick() {
    const column = this.$refs.columnItem as HTMLDivElement
    column.classList.add('subscribe-rotate-out');
    setTimeout(() => {
      this.$emit('handleClick', this.index)
    }, 1000);
  }
}
</script>
<style scoped>
.column-item {
  position: relative;
}
.subscribe-btn {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-image: linear-gradient(135deg,#fccf31 10%,#f55555);
  color: #fff !important;
  text-shadow: none;
}
.subscribe-rotate-out {
  animation: rotate-out 1s ease;
}
@keyframes rotate-out {
  from {
    opacity: 1;
  } to {
    transform: rotateY(720deg);
    opacity: 0;
  }
}
@media screen and (max-width: 400px) {
  .column-item {
    width: 100%;
  }
}
</style>