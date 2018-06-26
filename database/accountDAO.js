var db = require('./db');

module.exports.addUser = function(email, password) {
    var sql = `INSERT INTO taikhoan(email, matkhau) VALUES ("${email}", "${password}");`;
    return db.executeQuery(sql);
}

module.exports.getUser = function(email) {
    var sql = `SELECT * FROM taikhoan where email = "${email}";`;
    return db.executeQuery(sql);
}