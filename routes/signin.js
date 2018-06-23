var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login/signin', {
        title: 'Đăng nhập | CamShop'
    });
});

router.post('/', function(req, res, next) {
});

module.exports = router;