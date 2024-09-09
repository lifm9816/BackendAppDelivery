const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '181803001.7098',
    database: 'delivery'
});

db.connect(function(err) {
    if(err) throw err;
    console.log('DATABASE CONNECTED!')
});

module.exports = db;