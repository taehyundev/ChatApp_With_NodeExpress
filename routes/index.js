var express = require('express')
var router = express.Router()
var test_socket = require('./test/socket_ex')

router.get('/', (req,res)=>{
    res.render('index.ejs')
})

router.use('/test', test_socket)

module.exports =router