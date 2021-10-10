<template>
  <div id="app">
    <!-- <h1>{{msg}}</h1> -->
    <div class="content">
      <chat-com :currentUser="currentUser"></chat-com>  
      <userlist-com @chooseuser='toggleUser' :userlist="userlist"></userlist-com>  
    </div>
    
  </div>
</template>

<script>
import chatCom from './components/chatcom.vue'
import userlistCom from './components/userlistcom.vue'

export default {
  name: 'App',
  components: {
    chatCom,userlistCom
  },
  data(){
    return {
       msg:'hello laochen',
      userlist:[
        {
          username:'小明',
          headerimg:require('./assets/img/1.jpg')
        },
        {
          username:'小红',
          headerimg:require('./assets/img/2.jpg')
        },
        {
          username:'小百',
          headerimg:require('./assets/img/3.jpg')
        },
        {
          username:'小爱',
          headerimg:require('./assets/img/4.jpg')
        }
      ],
      currentUser:{
          username:'小明',
          headerimg:require('./assets/img/1.jpg')
      }
    }
  },
  methods:{
    toggleUser:function(index){
      this.currentUser = this.userlist[index]
    }
  }
}
</script>

<style scoped>
  .content{
    display: flex;
    width: 800px;
    height: 700px;
    margin: 100px auto;
  }
</style>
  