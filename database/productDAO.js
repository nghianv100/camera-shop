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

module.exports.searchBrand = function(brand, name, category, origin){
    var sql;

    if(name != '' ){
        sql = `SELECT * FROM sanpham WHERE tensanpham like "%${name}%" `;
        if (brand != 'all'){
            sql += ` AND nhasanxuat = "${brand}" `;
        }

        if (category != 'all'){
            sql += ` AND loai="${category}" `;
        }

        if (origin != 'all'){
            sql += ` AND xuatxu="${origin}" `;
        }
    } else {
        if (brand != 'all'){
             sql = `SELECT * FROM sanpham WHERE nhasanxuat="${brand}"`;
        }

         if (category != 'all'){
            sql += ` AND loai="${category}" `;
        }

        if (origin != 'all'){
            sql += ` AND xuatxu="${origin}" `;
        }

        if (brand == 'all' && category == 'all' && origin == 'all'){
            sql = `SELECT * FROM sanpham `;
        }
    }    
    console.log(sql);
    return db.executeQuery(sql);
}