var express = require('express');
var productDAO = require('../database/productDAO');
var priceFormat = require('../utils/price-format');
var ProductDetail = require('../utils/ProductDetail');

var router = express.Router();

router.all('/:productID', function (req, res, next) {
    if (req.params.productID === 'product-handle') {
        next();
    } else {
        var productID = req.params.productID;
        productDAO.increaseViews(productID).then();
        productDAO.loadProduct(productID).then(result => {
            var info = new ProductDetail(result[0]);
            productDAO.loadProductRelatedType(info.type, info.id).then(typeList => {
                productDAO.loadProductRelatedBrand(info.brand, info.id).then(brandList => {
                    for (let k = 0; k < typeList.length; k++) {
                        typeList[k].gia_f = priceFormat(typeList[k].gia);
                    }

                    for (let h = 0; h < brandList.length; h++) {
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
    }
});

router.post('/product-handle', function (req, res, next) {
    if (!req.session.user) {
        res.send(`Bạn cần đăng nhập để thêm vào giỏ hàng.`);
    } else {
        var x = {
            id: req.body.id,
            quantity: parseInt(req.body.quantity)
        }

        var isExist = false;

        for(var k = 0; k < req.session.cart.length; k++) {
            if(req.session.cart[k].id == x.id) {
                req.session.cart[k].quantity += parseInt(x.quantity);
                isExist = true;
                break;
            }
        }

        if(isExist == false) {
            req.session.cart.push(x);
        }

        res.send(`Đã thêm ${req.body.quantity} sản phẩm vào giỏ hàng. ID: ${req.body.id}`);
    }
});

module.exports = router;