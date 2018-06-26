var mysql = require('mysql');

module.exports.executeQuery = function (query) {
    return new Promise(function (succ, fail) {
        var connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '+nguyentanphat13495+',
            database: 'camera_shop'
        });

        connection.connect();

        connection.query(query, function (error, results, fields) {
            if (error) {
                fail(error);
            } else {
                succ(results);
            }
            connection.end();
        });
    });
}