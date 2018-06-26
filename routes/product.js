var express = require('express');
var productDAO = require('../database/productDAO');
var priceFormat = require('../utils/price-format');
var ProductDetail = require('../utils/ProductDetail');

var router = express.Router();

router.all('/:productID', function (req, res, next) {
    var productID = req.params.productID;
    productDAO.increaseViews(productID).then();
    productDAO.loadProduct(productID).then(result => {
        var info = new ProductDetail(result[0]);
        info.nviews++;
        productDAO.loadProductRelatedType(info.type, info.id).then(typeList => {
            productDAO.loadProductRelatedBrand(info.brand, info.id).then(brandList => {
                for(let k = 0; k < typeList.length; k++) {
                    typeList[k].gia_f = priceFormat(typeList[k].gia);
                }

                for(let h = 0; h < brandList.length; h++) {
                    brandList[h].gia_f = priceFormat(brandList[h].gia);
                }

                res.render('product/product', {
                    title: info.name + ' | CamShop',
                    product: info,
                    related_type_list: typeList,
                    related_brand_list: brandList
                });
            });
        });
    });
});

module.exports = router;