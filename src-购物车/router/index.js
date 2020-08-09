import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Food from '@/components/Food'
import Infant from '@/components/Infant'
import Shoes from '@/components/Shoes'
import Digital from '@/components/Digital'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/infant',
      name: 'Infant',
      component: Infant
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/shoes',
      name: 'Shoes',
      component: Shoes
    },
    {
      path: '/digital',
      name: 'Digital',
      component: Digital
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
