import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import meCom from '../views/Me.vue'
import newsVue from '../views/newsView.vue'
import weather from '../views/weather.vue'
import bignews from '@/views/bignews'
import videoView from '@/components/videoView'
import textView from '@/components/textView'
import imageView from '@/components/imageView'
import navView from '@/components/nav'
import asideView from '@/components/aside'
import page404 from '@/views/page404'

Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    components:{
      nav:navView,
      aside:asideView,
      default:Home
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
    path: '/me',
    name: 'me',
    alias:"/self",
    component:meCom
  },
  {
    path:"/news/:id",
    // path:"/news",
    name:"news",
    // props:true,
    props:function(route){
      console.log(route)
      return {
        id:route.params.id,
        username:route.query.username}
    },
    component:newsVue
  },
  {
    path:'/weather/:city/:area',
    component:weather
  },
  {
    path:'/bignews/:content',
    component:bignews,
    children:[{
      path:'video',
      component:videoView
    },{
      path:'text',
      component:textView
    },{
      path:'image',
      component:imageView
    }]
  },
  {
    path:"/a",
    // redirect:"/about",
    redirect:(to)=>{
      console.log(to)
      if(to.query.go == 'about'){
        return {name:"news",params:{id:1234}}
      }else{
        return {name:"news",params:{id:4567}}
      }
      
    }
  },
  {
    path:"*",
    component:page404
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
