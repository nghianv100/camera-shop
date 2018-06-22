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