const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa',
});

connection.connect((err) => {
    if (err) {
        console.error('error connecton to MySql database:', err);
    } else {
        console.log('connected to MySql database');
    }
});

module.exports = connection;