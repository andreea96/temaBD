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



exports.insertWine= function () {
    connection.connect();
    connection.query('Insert into vinuri values (2,"rose de rusia", "rose de rusia.jpg")',function (err) {
        if(err) throw err

    });
    connection.end();

}




