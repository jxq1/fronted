<template>
  <div id="app">
    
    <!-- 导航 -->
    <router-view name="nav" />
    <!-- 侧边栏 -->
    <router-view name="aside" />
    <!-- 主要内容 -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  watch:{
    '$route':function(){
      console.log('路由发生更改')
    }
  }
}
</script>