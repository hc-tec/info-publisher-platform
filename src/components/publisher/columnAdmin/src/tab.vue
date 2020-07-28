<template>
  <div class="column-admin-tab">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Tab extends Vue {
  @Prop({type: String})
  title: string;
}
</script>
<style scoped>
.column-admin-tab {
  width: 100%;
  padding-bottom: 22px;
  position: relative;
  overflow: hidden;
}
.column-admin-tab > h1 {
  width: 90%;
  font-size: 1.2em;
  margin: 0 auto;
  text-align: left;
  position: relative;
  font-weight: 300;
  color: #1a80c480;
}
.column-admin-tab > h1::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 100%;
  top: 0;
  left: -10px;
  background: #27e6f3;
}
@media screen {
  .column-admin-tab > h1 {
    color: #1a80c4;
  }
}
</style>