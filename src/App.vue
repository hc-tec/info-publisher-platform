<template>
  <div id="app">
    <router-view/>
    <navMenu ref="navMenu" />
    <draggableBtn ref="draggableBtn" @click="menuOperation" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import draggableBtn from './components/reusable/draggableBtn/src/button.vue'
import navMenu from './components/menu/src/menu.vue'
@Component({
  components: {
    draggableBtn,
    navMenu
  }
})
export default class TaskItem extends Vue {

  public menuStatus: boolean = false;

  public menuOperation() {

    this.menuStatus = !this.menuStatus;
    if(this.menuStatus) {
      (this.$refs.navMenu as any).menuSlideOut();
    } else {
      (this.$refs.navMenu as any).menuSlideIn();
    }

  }

  @Watch('$route')
  public routeChange(to: any, from: any) {
    if(to.path === from.path) return ;
    const list = document.querySelector('#nav-menu-list').children;
    for(let el of list) {
      let link = el.getAttribute('link');
      if(link === to.path) {
        el.classList.add('nav-active');
      } else if(link === from.path) {
        el.classList.remove('nav-active');
      }
    }
    
  }

}

</script>

<style scoped>
#app {
  overflow: hidden;
  padding-bottom: 50px;
}
</style>

