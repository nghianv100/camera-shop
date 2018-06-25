var db = require('./db');

module.exports.load10Newest = function () {
    var sql = `SELECT * FROM sanpham ORDER BY ngaytiepnhan DESC LIMIT 10;`;
    return db.executeQuery(sql);
}

module.exports.load10BestSell = function() {
    var sql = `SELECT * FROM sanpham ORDER BY luotban DESC LIMIT 10;`;
    return db.executeQuery(sql);
}

module.exports.load10MostViews = function() {
    var sql = `SELECT * FROM sanpham ORDER BY luotxem DESC LIMIT 10;`;
    return db.executeQuery(sql);
}

module.exports.loadTypes = function() {
    var sql = `SELECT DISTINCT loai FROM sanpham;`
    return db.executeQuery(sql);
}

module.exports.loadBrands = function() {
    var sql = `SELECT DISTINCT nhasanxuat FROM sanpham;`;
    return db.executeQuery(sql);
}

module.exports.loadNations = function() {
    var sql = `SELECT DISTINCT xuatxu FROM sanpham;`;
    return db.executeQuery(sql);
}

module.exports.loadProduct = function(id) {
    var sql = `SELECT * FROM sanpham WHERE idsanpham = "${id}";`;
    return db.executeQuery(sql);
}

module.exports.loadProductRelatedType = function (type, id) {
    var sql = `SELECT * FROM sanpham WHERE loai = "${type}" AND idsanpham != "${id}" LIMIT 5;`;
    return db.executeQuery(sql);
}

module.exports.loadProductRelatedBrand = function(brand, id) {
    var sql = `SELECT * FROM sanpham WHERE nhasanxuat = "${brand}" AND idsanpham != "${id}" LIMIT 5;`;
    return db.executeQuery(sql);
}