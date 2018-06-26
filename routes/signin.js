var express = require('express');
var md5 = require('md5');
var accountDAO = require('../database/accountDAO');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login/signin', {
        title: 'Đăng nhập | CamShop',
        signin_fail: req.session.signin_fail,
        signin_msg: req.session.signin_msg
    });
    delete req.session.signin_fail;
    delete req.session.signin_msg;
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var password = md5(req.body.password);
    accountDAO.getUser(email).then(result => {
        if (result.length == 0) {
            req.session.signin_fail = true;
            req.session.signin_msg = 'Tài khoản này không tồn tại.';
            res.redirect('/signin');
        } else {
            if (password != result[0].matkhau) {
                req.session.signin_fail = true;
                req.session.signin_msg = 'Mật khẩu không chính xác.';
                res.redirect('/signin');
            } else {
                req.session.isLogged = true;
                req.session.user = result[0];
                res.redirect('/');
            }
        }
    });
});

module.exports = router;