var db = require('./db');

module.exports.createOrder = function(orderId, email, total, name, address, phone) {
    var sql = `INSERT INTO donhang (madonhang, email, thanhtien, hoten, diachi, sdt, ngay) 
                    VALUES ("${orderId}", "${email}", ${total}, "${name}", "${address}", "${phone}", NOW());`
    return db.executeQuery(sql);
}

module.exports.createSubsOrder = function (orderId, cart) {
    var sql = `INSERT   INTO donhang_sub (madonhang, idsanpham, soluong) 
                        VALUES ("${orderId}", "${cart[0].id}", ${cart[0].quantity}) `;
    for (var i = 1; i < cart.length; i++) {
        sql += ` , ("${orderId}", "${cart[i].id}", ${cart[i].quantity}) `;
    }
    return db.executeQuery(sql);
}

module.exports.loadOrder = function (orderId) {
    var sql = `SELECT * FROM donhang WHERE madonhang = "${orderId}";`;
    return db.executeQuery(sql);
}

module.exports.loadSubsOrder = function (orderId) {
    var sql = `SELECT * FROM donhang_sub WHERE madonhang = "${orderId}";`;
    return db.executeQuery(sql);
}

module.exports.loadUserOrders = function (email) {
    var sql = `SELECT * FROM donhang WHERE email = "${email}";`;
    return db.executeQuery(sql);
}