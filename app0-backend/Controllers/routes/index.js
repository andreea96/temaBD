var express = require('express');
var router = express.Router();
//var db=require('../../Helpers/dbops');


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


module.exports = router;
