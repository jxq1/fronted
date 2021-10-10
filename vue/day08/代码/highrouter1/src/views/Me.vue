<template>
    <div>
        <h1>这是个人中心</h1>
    </div>
</template>

<script>
export default {
    props:['id'],
    beforeRouteEnter(to,from,next){

    },
    beforeRouteUpdate(to,from,next){
        console.log('组件再次进入时调用更新')
        next()
    },
}
</script>