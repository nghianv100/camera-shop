var express = require('express');
var productDAO = require('../database/productDAO');

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

<<<<<<< HEAD
router.get('/list', function(req, res, next) {
    res.render('product/list');
=======
router.get('/list', function(req, res, next){
    productDAO.searchBrand(req.query.brand, req.query.name, req.query.type, req.query.nation)
    .then(result =>{
        console.log(result);
    })
>>>>>>> e7cc92bddea8203524238e5c7eb443a354648ee8
});

module.exports = router;