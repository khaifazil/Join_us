const { faker } = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'join_us'
});


var q = 'SELECT 1';
connection.query(q, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

