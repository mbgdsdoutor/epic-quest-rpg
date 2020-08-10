var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bqnerpc2#",
  database: "epicquest"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});