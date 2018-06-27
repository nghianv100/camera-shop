var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/dashboard', {
        title: 'Dashboard | CamShop',
        layout: 'admin/layout'
    })
});

router.get('/quanlythuonghieu', function(req, res, next) {
    res.render('admin/mabrands', {
        title: 'Dashboard | CamShop',
        layout: 'admin/layout'
    })
});

router.get('/quanlydonhang', function(req, res, next) {
    res.render('admin/maorders', {
        title: 'Dashboard | CamShop',
        layout: 'admin/layout'
    })
});

router.get('/quanlysanpham', function(req, res, next) {
    res.render('admin/maproducts', {
        title: 'Dashboard | CamShop',
        layout: 'admin/layout'
    })
});

router.get('/quanlyloai', function(req, res, next) {
    res.render('admin/matypes', {
        title: 'Dashboard | CamShop',
        layout: 'admin/layout'
    })
});

module.exports = router;