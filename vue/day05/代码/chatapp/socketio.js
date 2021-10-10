let socketio = {}

function getSocket(server){
    socketio.io= require('socket.io')(server);

        let io = socketio.io;
      
        io.on('connection',function(socket){
        //  此处的socket是当浏览器某个浏览器与服务器的连接对象
          socket.emit('news',{hello:'word'});
          // socket.on（）监听客户端发送过来的内容
          socket.on('my other event',function(data){
             console.log(socket.id);   
             console.log(data);
             socket.emit('hello',{content:"学习前端"})
          });
        });
      
}
socketio.getSocket = getSocket;
module.exports = socketio