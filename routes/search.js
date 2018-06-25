var express = require('express');
var productDAO = require('../database/productDAO');
var priceFormat = require('../utils/priceFormat');

var router = express();

router.get('/', function(req, res, next) {
    productDAO.loadBrands().then(_brands => {
        productDAO.loadTypes().then(_types => {
            productDAO.loadNations().then(_nations => {
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

router.get('/list', function(req, res, next){
    var params = req.query;
    productDAO.searchProduct(params.name, params.brand, params.type, params.nation, params.min, params.max)
    .then(result => {
        for(var i = 0; i < result.length; i++) {
            result[i].gia_f = priceFormat(result[i].gia);
        }
        res.render('product/list', {
            title: 'Kết quả tìm kiếm | CamShop', 
            products: result,
            amount: result.length
        })
    })
});

module.exports = router;