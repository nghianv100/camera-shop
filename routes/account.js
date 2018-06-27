var express = require('express');

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
        title: 'Đổi mật khẩu | CamShop'
    })
});

router.get('/order', function(req, res, next) {
    res.render('account/order', {
        title: 'Quản lý đơn hàng | CamShop'
    })
});



module.exports = router;