// 引入express实例化app
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// 启动监听80端口
server.listen(8080);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
    // socket.emit（），发送客户端数据
    console.log("连接");
    socket.emit('news',{hello:'word'});
    // socket.on（）监听客户端发送过来的内容
    socket.on('my other event',function(data){
        console.log(data);
    });
});