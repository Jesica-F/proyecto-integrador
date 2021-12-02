const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host: 'babbwopcynoxbvn8dahg-mysql.services.clever-cloud.com',
    user: 'urv1dftnkz0lo4ad',
    database: 'babbwopcynoxbvn8dahg',
    password: '87PeXu2HlZrrImbEUOS1'
});

databaseConnection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Servidor conectado a MySQL")
    }
});

module.exports = databaseConnection;