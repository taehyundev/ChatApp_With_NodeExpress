var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
var router = require('./routes/index')
var io = require('socket.io').listen(server)

server.listen(process.env.PORT || 3000)
console.log("Server Running..")


users = []
connections = []

//정적요소 사용
app.use(express.static('public'))
// ejs use
app.set('view engine','ejs')


io.sockets.on('connection', (socket)=>{
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length)

    //Disconnect
    socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket),1)
    console.log('Disconnected: %s sockets connected', connections.length)
    })
})

app.use(router)
