<template>
  <div class="home">
    <div id="nav">
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/me">个人中心</router-link> |
            <router-link to="/news">新闻</router-link>
            <!-- <a href="/news">新闻中心</a> 可以用a标签但是就没有样式了 -->
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="goEvent">跳转到新闻页</button>
    <button @click="go">前进</button>
    <button @click="back">后退</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    goEvent:function(){
      // // 通过路径跳转
      // this.$router.push({
      //   path:"/news"
      // })

      // // // 通过路径跳转带参数
      // this.$router.push({
      //   path:"/news/123?username=laochen&password=123456"
      // })

      // // 通过路径跳转带参数以及待查询参数
      this.$router.push({
        path:"/news/123",
        query:{
          username:"laochen",
          password:"123456"
        }
      })


      // 通过名字跳转
      // this.$router.push({
      //   name:"news"
      // })

      // 通过名字跳转带参数
      // this.$router.push({
      //   name:'news',
      //   params:{
      //     id:456
      //   }
      // })

      // 替换
      // this.$router.replace({
      //   path:"/news/123",
      //   query:{
      //     username:"小明",
      //     password:"123456"
      //   }
      // })
    },

    go:function(){
     this.$router.go(1)
    },
    back:function(){
      this.$router.go(-1)
    }
  }
}
</script>
