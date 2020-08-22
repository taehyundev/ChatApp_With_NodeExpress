var express =require('express')
var app = require('express')();

var http = require('http').createServer(app);
var io = require('socket.io')(http);
var routes = require('./routes/index');
//ejs set
app.set('view engine','ejs')
app.use(express.static(__dirname+'/public'))
//post get 요청시 routes에서 처리
app.use(routes)
io.on('connection', (socket) => {
    console.log("connect,user")
    
    socket.on('disconnect', ()=>{
        console.log("disconnect, user")
    })
    
    socket.on('chat m', (e) => {
        console.log(`user:${e.username}, message: ${e.msg}`);
        io.emit('chat m', e);
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
