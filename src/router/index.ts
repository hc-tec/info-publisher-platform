import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/entry.vue')
  },
  {
    path: '/publisher',
    name: 'publisher',
    component: () => import('../views/publisher.vue'),
    children: [
      {
        path: 'taskPublish',
        name: 'taskPublish',
        component: () => import('../components/publisher/publishForm.vue')
      },
      {
        path: 'columnAdmin',
        name: 'columnAdmin',
        component: () => import('../components/publisher/columnAdmin/src/columnAdmin.vue')
      }
    ]
    
  },
  {
    path: '/receiver',
    name: 'receiver',
    children: [
      {
        path: 'tasks',
        name: 'receiver-task',
        component: () => import('../components/receiver/task/tasklist.vue')
      },
      {
        path: 'columns',
        name: 'columns',
        component: () => import('../components/receiver/column/columns.vue')
      },
      {
        path: 'task-details/:title',
        name: 'task-details',
        props: true,
        component: () => import('../components/receiver/task/taskDetails/taskDetails.vue')
      }
    ],
    component: () => import(/* webpackChunkName: "task" */ '../views/receiver.vue')
  },
  {
    path: '*',
    name: '404',
    redirect: '/login',
    // component: () => import('../views/entry.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
