import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // children:[
    //   {
    //     path:'bar',
    //     component:Bar,
    //     meta:{requiresAuth:true}
    //   }
    // ]
    // beforeEnter:(to,from,next)=>{
    //   console.log('/about独享事件')
    //   let isLogin = false;
    //   if(isLogin || to.path=='/login'){
    //    next()
    //   }else{
    //    next({
    //     path:"/login"
    //    })
    //   }
    // }
    meta:{requiresAuth:true}
  },
  {
    path:'/login',
    name:"login",
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  console.log('beforeEach------------')
  console.log(from,to);
  next();
  let isLogin = false;
  if(to.meta.requiresAuth){
    if(isLogin){
      next()
    }else{
      next({path:"/login"})
    }
  }else{
    next()
  }
  // next(false)
  
  // if(isLogin || to.path=='/login'){
  //   next()
  // }else{
  //   next({
  //     path:"/login"
  //   })
  // }
})

// router.afterEach((to,from)=>{
//   console.log('beforeEach------------')
//   console.log(from,to);
// })

// router.onError((err)=>{
//   console.log('err-------------------')
//   console.log(err);
// })

export default router
