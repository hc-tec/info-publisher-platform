<template>
  <li
    class="nav-item" 
    @click="handleClick"
    :link="navItem.nav_link">
    <i :class="navItem.nav_icon"></i> {{ navItem.nav_text }}
  </li>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import NavItem from '../interface/navItem'
@Component
export default class MenuItem extends Vue {

  @Prop()
  public navItem: NavItem;

  public handleClick() {
    this.$router.push(this.navItem.nav_link);
    this.$emit('click')
  }
}
</script>
<style scoped>
.fa {
  width: 50px;
  margin-left: 20px;
}
.nav-item {
  width: 100%;
  padding: 10px 0;
  transition: background-image .3s, color .3s;
}
.nav-active,
.nav-item:hover {
  background-image: linear-gradient(135deg,#fccf31 10%,#f55555);
  color: white;
}
</style>