var express = require('express')
var app = express()
var router = require('./router/index')
app.listen(3000,function(){
    console.log('server, listen!')
})

//정적요소 사용
app.use(express.static('public'))
// ejs use
app.set('view engine','ejs')

app.use(router)
