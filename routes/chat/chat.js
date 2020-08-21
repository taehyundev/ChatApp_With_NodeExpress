var express = require("express")
var router = express.Router()

router.get('/chat', (req, res) => {
    res.render('chat.ejs');
});

module.exports = router