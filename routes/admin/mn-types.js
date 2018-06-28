var express = require('express');

var productDAO = require('../../database/productDAO');

var router = express.Router();

router.get('/', function (req, res, next) {
    productDAO.loadAllTypes().then(types => {
        res.render('admin/matypes', {
            layout: 'admin/layout',
            types: types
        });
    });
});

router.post('/add', async function (req, res, next) {
    var id = req.body.id;
    var name = req.body.name;
    try {
        var x = await productDAO.addNewType(id, name);
        res.send('Thêm loại mới thành công.')
    } catch (error) {
        res.send('Thêm thất bại, mã loại đã tồn tại.');
    }
});

router.post('/update', async function (req, res, next) {
    var id = req.body.id;
    var name = req.body.name;
    try {
        var x = await productDAO.updateType(id, name);
        res.send('Cập nhật thành công.')
    } catch (error) {
        res.send('Cập nhật thất bại.');
    }
});

router.post('/remove', async function (req, res, next) {
    var id = req.body.id;
    console.log(req.body);
    try {
        var x = await productDAO.removeType(id);
        res.send('Xóa loại thành công.')
    } catch (error) {
        console.log(error);
        res.send('Xóa loại thất bại vì loại này tồn tại trong các bảng dữ liệu khác.');
    }
});

module.exports = router;