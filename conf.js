const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // à copmléter
  password: 'password', // à compléter
  database: 'wildcircus2',
});

module.exports = connection;
