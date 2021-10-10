<template>
  <div class="chatItem">
      <img :style="imgStyle" :src="chatitem.user.headerimg">
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    props:['chatitem'],
    data(){
        return{
            imgStyle:{
                width:"60px",
                height:"60px"
            }
        }
    }
}
</script>

<style scoped>
    .chatItem{
        display: flex;  
    }
</style>