var express = require('express')
var router = express.Router()

router.get('/', (req,res)=>{
    res.render('index_test.ejs')
})
module.exports = router