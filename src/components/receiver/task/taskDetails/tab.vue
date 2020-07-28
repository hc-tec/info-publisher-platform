<template>
  <div class="task-details-tab">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Tab extends Vue {

  @Prop({type: String})
  public title: string;

}
</script>
<style scoped>
.task-details-tab {
  margin-bottom: 10px;
}
.task-details-tab > h2 {
  color: #1a80c4;
  border-left: 5px solid #c3f4bf;
  padding-left: 10px;
  font-weight: 300;
  margin-bottom: 10px;
}
</style>