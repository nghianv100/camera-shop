var express = require('express');
var md5 = require('md5');
var accountDAO = require('../database/accountDAO');

// Chưa kiểm tra Email
// Chưa kiểm tra độ dài mật khẩu
// Chưa kiểm tra mật khẩu trùng nhau
// Chưa kiểm tra Email đã tồn tại hay chưa

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login/signup', {
        title: 'Đăng ký | CamShop',
    })
});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var passwordmd5 = md5(password);
    accountDAO.addAccount(email, passwordmd5).then(function(result) {
        console.log(result);
    })
});

module.exports = router;