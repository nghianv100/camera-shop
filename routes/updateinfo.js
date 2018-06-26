var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('updateinfo', {
        title: 'Cập Nhật Thông Tin'
    });
});

router.post('/', function(req, res, next) {
});

module.exports = router;