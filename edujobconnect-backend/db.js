const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'edujobconnect'
});

connection.connect((err) => {
    if(err) {
        console.log("Error while connecting to database : ", err);
        return;
    } 
    console.log("Connected to database");
});

module.exports = connection