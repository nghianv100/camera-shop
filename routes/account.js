var express = require('express');
var accountDao = require('../database/accountDAO');
var md5 = require('md5');
var router = express.Router();

var accountDAO = require('../database/accountDAO');

router.get('/', function (req, res, next) {
    res.render('account/update-info', {
        title: 'Cập nhật thông tin cá nhân | CamShop', 
        user: req.session.user,
        update_succ: req.session.update_succ
    });

    if (req.session.update_succ) {
        delete req.session.update_succ;
    }
});

router.post('/', function(req, res, next){
    accountDAO.updateUser(req.session.user.email, req.body.name, req.body.phone).then(result => {
        req.session.update_succ = true;
        res.redirect('/account');
    });
   
});

router.get('/password', function (req, res, next) {
    res.render('account/password', {
        title: 'Đổi mật khẩu | CamShop',
        succ: req.session.change_password_succ,
        fail: req.session.change_password_fail
    });

    if(req.session.change_password_succ != undefined) {
        delete req.session.change_password_succ;
    }
    
    if(req.session.change_password_fail != undefined) {
        delete req.session.change_password_fail;
    }

});

router.get('/order', function(req, res, next) {
    res.render('account/order', {
        title: 'Quản lý đơn hàng | CamShop'
    })
});

router.post('/password', function(req, res, next) {
    if(req.body.old_password != req.session.user.matkhau) {
        req.session.change_password_fail = true;
        res.redirect('/account/password');
    }
    else {
        var new_password = md5(req.body.new_password);
        accountDao.changePassword(req.session.user.email, new_password).then(result => {
            req.session.change_password_succ = true;
            res.redirect('/account/password');
        }); 
    }
});


module.exports = router;