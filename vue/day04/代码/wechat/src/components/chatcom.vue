<template>
  <div class="chat">
    <h1 class="user">用户:{{currentUser.username}}</h1>
    <!-- 聊天列表 -->
    <div class="chatlist">
        <chatitem-com v-for="(item,index) in chatList" :chatitem='item' :key="index">
            {{item.chatcontent}}
        </chatitem-com>
    </div>
    <chatinput-com :sendEvent='sendEvent'></chatinput-com>
  </div>
</template>

<script>
import chatinputCom from './chatinputcom'
import chatitemCom from './chatitemcom'
export default {
    props:['currentUser'],
    components:{
        chatinputCom,chatitemCom
    },
    data(){
        return {
            chatList:[
                {
                    user:{
                        username:"小明",
                        headerimg:require('../assets/img/1.jpg')
                    },
                    chatcontent:"吃了吗？"
                }
            ]
        }
    },
    methods:{
        sendEvent:function(value){
            this.chatList.push({
                 user:{
                        username:"小明",
                        headerimg:require('../assets/img/1.jpg')
                    },
                    chatcontent:value
            })
            console.log(this)
            this.chatList.push({
                    user:this.$root.$children[0].currentUser,
                    chatcontent:new Date()
            })
        }
    }
}
</script>

<style scoped>
    .chat{
        width: 500px;
        height: 700px;
        border: 1px solid #ccc;
    }
</style>