var express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('account/update-info', {
        title: 'Cập nhật thông tin cá nhân | CamShop', 
        user: req.session.user
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
})

module.exports = router;