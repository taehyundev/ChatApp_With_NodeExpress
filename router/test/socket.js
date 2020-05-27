var express = require('express')
var router = express.Router()

router.get('/', (req,res)=>{
    res.render('test_socket.ejs')
})

module.exports = router