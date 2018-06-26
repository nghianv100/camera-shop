var express = require('express');
var md5 = require('md5');
var accountDAO = require('../database/accountDAO');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login/signup', {
        title: 'Đăng ký | CamShop',
        signup_fail: req.session.signup_fail,
        signup_succ: req.session.signup_succ
    });
    if (req.session.signup_fail != undefined) {
        delete req.session.signup_fail;
    }
    if (req.session.signup_succ) {
        delete req.session.signup_succ;
    }
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var passwordmd5 = md5(password);
    accountDAO.getUser(email).then(user => {
        if (user.length != 0) {
            req.session.signup_fail = true;
            req.session.signup_succ = false;
            res.redirect('/signup');
        } else {
            accountDAO.addUser(email, passwordmd5).then(result => {
                req.session.signup_succ = true;
                req.session.signup_fail = false;
                res.redirect('/signup');
            });
        }
    });
});

module.exports = router;