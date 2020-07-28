<template>
  <div class="column-admin">
    <column-admin-tab
      title="创建专栏">
      <light-button ref="columnCreatorBtn" @click="columnCreatorSlide">+</light-button>
      <column-creator ref="columnCreator" />
    </column-admin-tab>
    <column-admin-tab
      title="已创建专栏">
      <card 
        v-for="(column, index) in columns"
        :key="column.card_name"
        :index="index"
        :card="column"
        @handleClick="removeColumn($event)">
      </card>
    </column-admin-tab>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import card from '../../../reusable/animalIntroductionCard/src/card.vue'
import Card from  '../../../reusable/animalIntroductionCard/interface/card'
import columnAdminTab from './tab.vue'
import lightButton from '../../../reusable/lightButton/src/button.vue'
import columnCreator from './columnCreator.vue'
import ColumnCreator from './columnCreator.vue'
@Component({
  components: {
    card,
    columnAdminTab,
    lightButton,
    columnCreator
    
  }
})
export default class ColumnAdmin extends Vue {
  public columns: Card[] = [
    {
        card_name: '软工1910班信息发布专栏',
        card_introduction: '软工1910班信息发布专栏软工1910班信息发布专栏软工1910班信息发布专栏软工1910班信息发布专栏',
        card_avatar: 'as',
        // card_creator: 'as',
    },
    {
        card_name: 'ass',
        card_introduction: 'asas',
        card_avatar: 'as',
        // card_creator: 'as',
    }
      
  ]

  private extended: boolean = false;

  public debouce: any = null;

  public columnCreatorSlide() {
    const trans = () => {
      const columnCreator = (this.$refs.columnCreator as any).$el as HTMLDivElement
          , columnCreatorBtn = (this.$refs.columnCreatorBtn as any).$el as HTMLButtonElement
          , height = columnCreator.clientHeight

      const columnCreatorSlideDownTrans = () => {
        if(!this.extended) {
          columnCreator.style.height = '0'
          setTimeout(() => {
            columnCreator.style.position = 'relative'
            columnCreator.style.height = `${height}px`
          }, 400);
          columnCreatorBtn.innerHTML = '︽'
        } else {
          columnCreator.style.height = `0`
          setTimeout(() => {
            columnCreator.style.position = 'absolute'
            columnCreator.style.height = `${height}px`
          }, 400);
          columnCreatorBtn.innerHTML = '+'
        }
        this.extended = !this.extended
      }

      columnCreatorSlideDownTrans()
    }
    const debounce = (fn: () => any, time: number) => {
      let timer: any = null;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn()
        }, time);
      }
    }
    if(!this.debouce) {
      this.debouce = debounce(trans, 400)
    }
    this.debouce()
  }
}
</script>
<style scoped>
.column-admin {
  margin: 0 auto;
  padding: 40px 80px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
@media screen and (max-width: 400px) {
  .column-admin {
      padding: 0 10px;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 100px !important;
      justify-content: center;
  }
}
</style>