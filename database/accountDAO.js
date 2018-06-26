var db = require('./db');

module.exports.addUser = function(email, password, name) {
    var sql = `INSERT INTO taikhoan(email, matkhau, hoten) VALUES ("${email}", "${password}", "${name}");`;
    return db.executeQuery(sql);
}

module.exports.getUser = function(email) {
    var sql = `SELECT * FROM taikhoan where email = "${email}";`;
    return db.executeQuery(sql);
}