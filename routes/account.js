var express = require('express');
var accountDao = require('../database/accountDAO');
var orderDAO = require('../database/orderDAO');
var productDAO = require('../database/productDAO');
var priceFormat = require('../utils/price-format');
var md5 = require('md5');

var router = express.Router();

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

router.post('/', function (req, res, next) {
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

    if (req.session.change_password_succ != undefined) {
        delete req.session.change_password_succ;
    }

    if (req.session.change_password_fail != undefined) {
        delete req.session.change_password_fail;
    }

});

router.get('/orders', function (req, res, next) {
    orderDAO.loadUserOrders(req.session.user.email).then(result => {
        res.render('account/orders', {
            title: 'Quản lý đơn hàng | CamShop',
            orders: result
        })
    });
});

router.get('/orders/:orderId', function (req, res, next) {
    var orderId = req.params.orderId;
    orderDAO.loadOrder(orderId).then(_order => {
        orderDAO.loadSubsOrder(orderId).then(_subsOrder => {
            productDAO.loadBySubsOrder(_subsOrder).then(list => {
                for(var i= 0; i < _subsOrder.length; i++) {
                    for(var j = 0; j < list.length; j++) {
                        if(_subsOrder[i].idsanpham == list[j].idsanpham) {
                            _subsOrder[i].info = list[j];
                            break;
                        }
                    }
                }
                _order[0].thanhtien_f = priceFormat(_order[0].thanhtien);
                res.render('account/order-detail', {
                    title: 'Thông tin đơn hàng | CamShop',
                    order: _order[0],
                    subsOrder: _subsOrder
                });
            });
        });
    });
});

router.post('/password', function (req, res, next) {
    if (req.body.old_password != req.session.user.matkhau) {
        req.session.change_password_fail = true;
        res.redirect('/account/password');
    } else {
        var new_password = md5(req.body.new_password);
        accountDao.changePassword(req.session.user.email, new_password).then(result => {
            req.session.change_password_succ = true;
            res.redirect('/account/password');
        });
    }
});

module.exports = router;