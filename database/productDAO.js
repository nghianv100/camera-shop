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