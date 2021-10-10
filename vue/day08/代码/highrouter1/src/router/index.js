import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import meCom from '@/views/Me'
import listCom from '@/views/list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      needlogin:true,
      isAuth:true,
      content:"这是首页"
    },
    component: Home,
    beforeEnter:(to,from,next)=>{
      console.log("首页独享的路由进入函数")
      next()
    },
    mounted(){
      console.log(this.$route)
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/me',
    name:'me',
    component:meCom
  },
  {
    path:"/list",
    name:"list",
    component:listCom,
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to,from,savedPostion){
    console.log("--------------")
    if(to.path=='/list'){
      console.log(savedPostion)
      let obj = {x:0,y:savedPostion.y/2};
      console.log(obj)
      return obj
    }
    
    // return 期待滚动到哪个的位置
  }
})

export default router
