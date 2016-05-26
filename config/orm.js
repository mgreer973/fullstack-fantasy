var connection = require('../config/connection.js');
var orm = {
    findOne: function(tableInput, condition, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result[0]);
        });
    },
    all: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;