var db = require('./db');

module.exports.addAccount = function(email, password) {
    var sql = `INSERT INTO taikhoan(email, matkhau) VALUES ("${email}", "${password}");`;
    return db.executeQuery(sql);
}