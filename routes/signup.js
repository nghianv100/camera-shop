var express = require('express');
var md5 = require('md5');
var accountDAO = require('../database/accountDAO');
var request = require('request');

var router = express.Router();

router.get('/', function (req, res, next) {
    if (req.session.isLogged == true) {
        res.redirect('/');
    }
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
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        res.send('Hãy nhập Captcha');
    } else {
        const secretKey = "6Lf1VmEUAAAAAITKmQkVHCEOV4GrbFZ82VC0BjnO";
        const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

        request(verificationURL, function (error, response, body) {
            body = JSON.parse(body);

            if (body.success !== undefined && !body.success) {
                res.send('Xác thực Captcha thất bại!');
            } else {
                var email = req.body.email;
                var password = req.body.password;
                var passwordmd5 = md5(password);
                accountDAO.getUser(email).then(user => {
                    if (user.length != 0) {
                        res.send('Đăng ký thất bại, tài khoản đã tồn tại.')
                    } else {
                        var userName = email.slice(0, email.indexOf('@'));
                        accountDAO.addUser(email, passwordmd5, userName).then(result => {
                            res.send('Đăng ký thành công, bạn có thể đăng nhập ngay bây giờ');
                        });
                    }
                });
            }

        });
    }

    // var email = req.body.email;
    // var password = req.body.password;
    // var passwordmd5 = md5(password);
    // accountDAO.getUser(email).then(user => {
    //     if (user.length != 0) {
    //         req.session.signup_fail = true;
    //         res.redirect('/signup');
    //     } else {
    //         var userName = email.slice(0, email.indexOf('@'));
    //         accountDAO.addUser(email, passwordmd5, userName).then(result => {
    //             req.session.signup_succ = true;
    //             res.redirect('/signup');
    //         });
    //     }
    // });
});

module.exports = router;