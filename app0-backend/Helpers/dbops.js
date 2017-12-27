/**
 * Created by andreea.olaru on 12/22/2017.
 */

var mysql=require('mysql');
var connection= mysql.createConnection({
    host: 'localhost',
    user: 'user1',
    password: 'pass',
    database: 'viticultura'
});


module.exports=connection;




