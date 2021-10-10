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
        <h1>这是个人中心</h1>
        <button @click="goAbout">按钮</button>
    </div>
</template>>

<script>
export default {
    methods:{
        goAbout(event){
            this.$router.push({
                path:'../about'
            })
            console.log(this)
        }
    }
}
</script>