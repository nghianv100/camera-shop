var express = require('express');

var mnBrands = require('./mn-brands');
var mnTypes = require('./mn-types');
var mnProducts = require('./mn-products');
var mnOrders = require('./mn-orders');

var router = express();

router.use('/quanlythuonghieu', mnBrands);
router.use('/quanlydonhang', mnOrders);
router.use('/quanlysanpham', mnProducts);
router.use('/quanlyloai', mnTypes);

router.get('/', function (req, res, next) {
    res.render('admin/dashboard', {
        layout: 'admin/layout'
    })
});

router.get('/home', function (req, res, next) {
    res.redirect('/admin');
})

module.exports = router;