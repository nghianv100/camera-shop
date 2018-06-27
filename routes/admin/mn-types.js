var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/matypes', {
        title: 'Dashboard | CamShop',
        layout: 'admin/layout'
    })
});

module.exports = router;