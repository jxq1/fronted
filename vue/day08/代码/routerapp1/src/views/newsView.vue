<template>
    <div>
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
        <!-- <h1>新闻内容页面:{{$route.params.id}}</h1> -->
        <h1>新闻内容页面:{{id}}</h1>
    </div>
</template>

<script>
export default {
    props:['id',"username"],
    mounted(){
        console.log(this)
    }
}
</script>