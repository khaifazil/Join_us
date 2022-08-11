const { faker } = require('@faker-js/faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'user',
	password: 'password',
	database: 'join_us'
});

// var q = 'SELECT COUNT(*) AS total FROM users';
// connection.query(q, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results[0].total);
// });

// var q = 'INSERT INTO users(email) values("wyatt_the_dog@gmail.com")';
// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results);
// });

// var person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past()
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, function (err, result) {
// 	if (err) throw err;
// 	console.log(result);
// });


// connection.end();

let data = [];
for(let i = 0; i <500; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
	]);
}

console.log(data)

let q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function (err, result) {
	console.log(err);
	console.log(result);
});

connection.end();