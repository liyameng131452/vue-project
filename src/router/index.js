import Vue from 'vue'
import Router from 'vue-router'
//引入商品相关的组件
import GoodList from "@/components/goods/list"
import GoodDetail from "@/components/goods/detail"
import NewsList from "@/components/news/list"
import NewsDetail from "@/components/news/detail"
import PictureList from "@/components/pictures/list"
import PictureDetail from "@/components/pictures/detail"
import Cart from "@/components/tabbar/cart"
import Home from "@/components/tabbar/home"
import Member from "@/components/tabbar/member"
import Search from "@/components/tabbar/search"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    
    //tabbar的
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/search',
      component: Search
    },
    //商品的
    {
      path: '/goods',
      component: GoodList
    },
    {
      path: '/goods/detail',
      component: GoodDetail
    },
    //新闻的
    {
      path: '/news',
      component: NewsList
    },
    {
      path: '/news/detail/:id',
      component: NewsDetail
    },
    //图片的
    {
      path: '/pics',
      component: PictureList
    },
    {
      path: '/pics/detail',
      component: PictureDetail
    },
  ],
  linkActiveClass:"mui-active"
})
