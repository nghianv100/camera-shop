var express = require('express');
var md5 = require('md5');
var accountDAO = require('../database/accountDAO');

// Đã kiểm tra định dạng Email
// Đã kiểm tra độ dài mật khẩu
// Đã kiểm tra mật khẩu trùng nhau
// Chưa kiểm tra Email đã tồn tại hay chưa

var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login/signup', {
        title: 'Đăng ký | CamShop',
        signup_fail: req.session.signup_fail,
        signup_succ: req.session.signup_succ
    });
    delete req.session.signup_fail;
    delete req.session.signup_succ;
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var passwordmd5 = md5(password);
    accountDAO.getUser(email).then(user => {
        if (user.length != 0) {
            req.session.signup_fail = true;
            res.redirect('/signup');
        } else {
            accountDAO.addUser(email, passwordmd5).then(result => {
                req.session.signup_succ = true;
                res.redirect('/signup');
            });
        }
    });
});

module.exports = router;