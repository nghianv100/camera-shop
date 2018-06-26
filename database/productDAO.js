var db = require('./db');

module.exports.load10Newest = function () {
    var sql = `SELECT * FROM sanpham ORDER BY ngaytiepnhan DESC LIMIT 10;`;
    return db.executeQuery(sql);
}

module.exports.load10BestSell = function () {
    var sql = `SELECT * FROM sanpham ORDER BY luotban DESC LIMIT 10;`;
    return db.executeQuery(sql);
}

module.exports.load10MostViews = function () {
    var sql = `SELECT * FROM sanpham ORDER BY luotxem DESC LIMIT 10;`;
    return db.executeQuery(sql);
}

module.exports.loadTypes = function () {
    var sql = `SELECT DISTINCT loai FROM sanpham;`
    return db.executeQuery(sql);
}

module.exports.loadBrands = function () {
    var sql = `SELECT DISTINCT nhasanxuat FROM sanpham;`;
    return db.executeQuery(sql);
}

module.exports.loadNations = function () {
    var sql = `SELECT DISTINCT xuatxu FROM sanpham;`;
    return db.executeQuery(sql);
}

module.exports.loadProduct = function (id) {
    var sql = `SELECT * FROM sanpham WHERE idsanpham = "${id}";`;
    return db.executeQuery(sql);
}

module.exports.loadProductRelatedType = function (type, id) {
    var sql = `SELECT * FROM sanpham WHERE loai = "${type}" AND idsanpham != "${id}" LIMIT 5;`;
    return db.executeQuery(sql);
}

module.exports.loadProductRelatedBrand = function (brand, id) {
    var sql = `SELECT * FROM sanpham WHERE nhasanxuat = "${brand}" AND idsanpham != "${id}" LIMIT 5;`;
    return db.executeQuery(sql);
}

module.exports.searchProduct = function (name, brand, type, nation, min, max) {
    var sql;
    var _min, _max;

    if (min == undefined) {
        _min = 0;
    } else {
        _min = min;
    }

    if (max == undefined) {
        _max = 100000000;
    } else {
        _max = max;
    }

    if (name != '' && name != undefined) {
        sql = `SELECT * FROM sanpham WHERE tensanpham like "%${name}%" AND gia > ${_min} AND gia < ${_max} `;

        if (brand != 'all' && brand != undefined) {
            sql += ` AND nhasanxuat = "${brand}" `;
        }

        if (type != 'all' && type != undefined) {
            sql += ` AND loai="${type}" `;
        }

        if (nation != 'all' && nation != undefined) {
            sql += ` AND xuatxu="${nation}" `;
        }
    } else {
        sql = `SELECT * FROM sanpham WHERE gia > ${_min} AND gia < ${_max} `;

        if (brand != 'all' && brand != undefined) {
            sql += ` AND nhasanxuat="${brand}" `;
        }

        if (type != 'all' && type != undefined) {
            sql += ` AND loai="${type}" `;
        }

        if (nation != 'all' && nation != undefined) {
            sql += ` AND xuatxu="${nation}" `;
        }
    }

    return db.executeQuery(sql);
}

module.exports.searchProductPag = function (name, brand, type, nation, min, max, page) {
    var sql;
    var _min, _max;

    if (min == undefined) {
        _min = 0;
    } else {
        _min = min;
    }

    if (max == undefined) {
        _max = 100000000;
    } else {
        _max = max;
    }

    if (name != '' && name != undefined) {
        sql = `SELECT * FROM sanpham WHERE tensanpham like "%${name}%" AND gia > ${_min} AND gia < ${_max} `;

        if (brand != 'all' && brand != undefined) {
            sql += ` AND nhasanxuat = "${brand}" `;
        }

        if (type != 'all' && type != undefined) {
            sql += ` AND loai="${type}" `;
        }

        if (nation != 'all' && nation != undefined) {
            sql += ` AND xuatxu="${nation}" `;
        }
    } else {
        sql = `SELECT * FROM sanpham WHERE gia > ${_min} AND gia < ${_max} `;

        if (brand != 'all' && brand != undefined) {
            sql += ` AND nhasanxuat="${brand}" `;
        }

        if (type != 'all' && type != undefined) {
            sql += ` AND loai="${type}" `;
        }

        if (nation != 'all' && nation != undefined) {
            sql += ` AND xuatxu="${nation}" `;
        }
    }

    var n = parseInt(page);

    var pageNumber = 4 * (n - 1);

    sql += ` LIMIT 4 OFFSET ${pageNumber}; `;

    return db.executeQuery(sql);
}

module.exports.increaseViews = function (id) {
    var sql = `UPDATE sanpham SET luotxem = luotxem + 1 WHERE idsanpham = "${id}";`
    return db.executeQuery(sql);
}