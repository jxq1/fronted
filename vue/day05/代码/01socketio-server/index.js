var app = require('http').createServer(handler);
var socketio = require('socket.io');
var io = socketio(app,{origins:'*:*'});
// var io = socketio(app,{cors:true});
var fs = require('fs');

// 启动监听80端口
app.listen(8080);

// 处理web服务器正常的请求
function handler(req,res){
    console.log("处理事件");
    // 读文件，再输出
    fs.readFile(__dirname+'/index.html',
    function(err,data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

// 实时通讯的连接
// 
// io.on('connection'，事件的回调函数)。监听socketio的连接事件
io.on('connection',function(socket){
    // socket.emit（），发送客户端数据
    console.log("连接");
    socket.emit('news',{hello:'word'});
    // socket.on（）监听客户端发送过来的内容
    socket.on('my other event',function(data){
        console.log(data);
    });
});