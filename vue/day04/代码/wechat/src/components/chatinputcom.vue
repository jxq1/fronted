<template>
  <div class="text">
      <!-- <input @keydown.enter="sendEvent($event.target.value)" v-model="inputContent" type="text">
      <button @click="sendEvent($event.target.value)">发送</button> -->
      <!-- 发送完后输入框清空 -->
      <input @keydown.enter="send" v-model="inputContent" type="text">
      <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
    props:['sendEvent'],
    data(){
        return{
            inputContent:""
        }
    },
    methods:{
        send:function(){
            this.sendEvent(this.inputContent)
            this.inputContent = ""
        }
    }
}
</script>