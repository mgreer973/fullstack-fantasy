var mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL) {
     connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else { 
    var connection = mysql.createConnection({
    port: 3306,    
    host: 'localhost',
    user: 'root',
    password: 'mymgap30#',
    database: 'fullstack_fantasy_db'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
//    console.log('app listening to port ', port);
});

module.exports = connection;