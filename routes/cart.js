var express = require('express');
var priceFormat = require('../utils/price-format');
var productDAO = require('../database/productDAO');

var router = express.Router();

router.get('/', function (req, res, next) {
    // Chưa kiểm tra giỏ rỗng
    var cart = req.session.cart;
    productDAO.loadByCart(cart).then(result => {
        var total = 0;
        for(var i = 0; i < result.length; i++) {
            result[i].gia_f = priceFormat(result[i].gia);
            for(var j = 0; j < cart.length; j++) {
                if(result[i].idsanpham == cart[j].id) {
                    result[i].quantity = cart[j].quantity;
                }
            }
            total += result[i].gia * result[i].quantity;
        }
        res.render('purchase/cart', {
            title: 'Giỏ hàng | CamShop',
            products: result,
            money: total,
            money_f: priceFormat(total)
        });
    });
});

module.exports = router;