var express = require('express');
var md5 = require('md5');
var accountDAO = require('../database/accountDAO');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/matypes', {
        title: 'Dashboard | CamShop',
        layout: ''
    });
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
            var userName = email.slice(0, email.indexOf('@'));
            accountDAO.addUser(email, passwordmd5, userName).then(result => {
                req.session.signup_succ = true;
                res.redirect('/signup');
            });
        }
    });
});

module.exports = router;