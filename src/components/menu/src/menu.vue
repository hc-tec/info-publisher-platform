<template>
  <nav 
    ref="navMenu"
    class="nav-menu">
    <user-info></user-info>
    <hr>
    <ul id="nav-menu-list">
      <nav-item 
        v-for="item in navItems"
        :key="item.nav_icon"
        :nav-item="item"
        v-on="$listeners">
      </nav-item>
    </ul>
  </nav>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import navItem from './menuItem.vue'
import NavItem from '../interface/navItem'
import userInfo from './userInfo.vue'
import { 
    Route_home, Route_login,
    Route_publisher, Route_tasks, 
    Route_columns, Route_columnAdmin
} from '../../../utils/store'
@Component({
  components: {
    navItem,
    userInfo
  }
})
export default class Menu extends Vue {
  public navItems: NavItem[] = [
    {
      nav_text: '登录',
      nav_icon: 'fa fa-superpowers',
      nav_link: Route_login
    },
    // {
    //   nav_text: '首页',
    //   nav_icon: 'fa fa-institution',
    //   nav_link: Route_home
    // },
    {
      nav_text: '专栏管理',
      nav_icon: 'fa fa-server',
      nav_link: Route_columnAdmin
    },
    {
      nav_text: '专栏订阅',
      nav_icon: 'fa fa-columns',
      nav_link: Route_columns
    },
    {
      nav_text: '信息接收',
      nav_icon: 'fa fa-bell-o',
      nav_link: Route_tasks
    },
    {
      nav_text: '信息发布',
      nav_icon: 'fa fa-send-o',
      nav_link: Route_publisher
    },
    
    // {
    //   nav_text: '退出登录',
    //   nav_icon: 'fa fa-power-off',
    //   nav_link: Route_login
    // },
  ]

  public menuSlideOut() {
    const nav = this.$refs.navMenu as HTMLDivElement
    nav.style.boxShadow = '0 1px 20px grey'
    nav.style.left = `0`
    
  }

  public menuSlideIn() {
    const nav = this.$refs.navMenu as HTMLDivElement
    const width = document.body.clientWidth
    nav.style.left = `-${width*0.8}px`
    nav.style.boxShadow = 'none'
  }


}
</script>
<style scoped>
.nav-menu {
  font-size: 1.2em;
  position: fixed;
  top: 0;
  width: 80%;
  height: 100vh;
  left: -80%;
  transition: left .5s, box-shadow .5s;
  background-color: #fff;
  box-shadow: none;
  border-radius: 2px;
  overflow: hidden;
}
.nav-menu > * {
  margin-bottom: 10px;
}
</style>