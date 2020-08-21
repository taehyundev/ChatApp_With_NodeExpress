var express = require('express');
var path = require("path")
var chat = require('./chat/chat')
var router = express.Router()

router.use(express.static('public'))

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get('/chat',chat );

module.exports =router