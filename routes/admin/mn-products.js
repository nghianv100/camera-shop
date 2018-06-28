var express = require('express');

var productDAO = require('../../database/productDAO');
var orderDAO = require('../../database/orderDAO');
var accountDAO = require('../../database/accountDAO');

var router = express.Router();

router.get('/', function(req, res, next) {
    productDAO.loadAllProducts().then(result => {
        res.render('admin/maproducts', {
            title: 'Dashboard | CamShop',
            layout: 'admin/layout',
            products: result
        })
    });
});

router.get('/edit/:productId', function(req, res, next) {
    detailProduct(req, res, next);
});

router.post('/edit-update', function(req, res, next) {
    editProduct(req, res, next);
});

async function detailProduct(req, res, next) {
    var product = await productDAO.loadProduct(req.params.productId);
    var types = await productDAO.loadAllTypes();
    var brands = await productDAO.loadAllBrands();

    res.render('admin/product-edit', {
        layout: 'admin/layout',
        product: product[0],
        types: types,
        brands: brands
    });
}

async function editProduct(req, res, next) {
    req.body.price_f = parseInt(req.body.price);
    req.body.number_f = parseInt(req.body.number);
    try {
        var v = await productDAO.updateProducInformation(req.body);
        res.send('Cập nhật thành công.');
    } catch (error) {
        res.send('Cập nhật thất bại.');
    }
}

module.exports = router;