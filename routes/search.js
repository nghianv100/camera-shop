var express = require('express');
var productDAO = require('../database/productDAO');

var router = express();

router.get('/', function(req, res, next) {
    productDAO.loadBrands().then(_brands => {
        productDAO.loadTypes().then(_types => {
            productDAO.loadNations().then(_nations => {
                console.log(_brands);
                res.render('product/search', {
                    title: 'Tìm kiếm | CamShop',
                    brands: _brands,
                    types: _types,
                    nations: _nations
                });
            });
        });
    });
});

module.exports = router;