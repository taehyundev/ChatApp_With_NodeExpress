var express = require('express')
var router = express.Router()

router.get('/', (req,res)=>{
    res.render('test_socket.ejs')
})
io.on('connection', (socket) => {
    console.log('a user connected');
  });

module.exports = router