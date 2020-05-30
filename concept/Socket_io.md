```javascript
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

server.listen(process.env.PORT || 3000)
console.log("Server Running..")
```

* 위와같은 형태로 server를 연다. 
* io 변수를 만들어서 socket.io를 require해주고 server변수를 listen 해준다.


```javascript
io.sockets.on('connection', (socket)=>{
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length)

    //Disconnect
    socket.on('disconnect', (data)=>{
    connections.splice(connections.indexOf(socket),1)
    console.log('Disconnected: %s sockets connected', connections.length)
    })
})
```
io 변수의 sockets의 on 메소드로 listener 형태로 하고 connection 이 됬을 때, socket이라는 값을 받는다.
socket이라는 변수에 on 메소드를 열어서 connection 이후의 동작을 listener형태로 받는다 disconnect 가 됬을 때 (data)={}의 작업을 수행한다.