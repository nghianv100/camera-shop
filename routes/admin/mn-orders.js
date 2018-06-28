var express = require('express');

var orderDAO = require('../../database/orderDAO');
var dateFormat = require('../../utils/date-format');
var priceFormat= require('../../utils/price-format');

var router = express.Router();

router.get('/', function (req, res, next) {
    orderDAO.loadAll().then(result => {
        for(var i = 0; i < result.length; i++) {
            if(result[i].trangthai == 0) {
                result[i].not = true;
            } else if (result[i].trangthai == 1) {
                result[i].being = true;
            } else if (result[i].trangthai == 2) {
                result[i].done = true;
            }
            result[i].ngay_f = dateFormat(result[i].ngay);
            result[i].thanhtien_f = priceFormat(result[i].thanhtien);
        }
        res.render('admin/maorders', {
            layout: 'admin/layout',
            orders: result
        })
    });
});

module.exports = router;