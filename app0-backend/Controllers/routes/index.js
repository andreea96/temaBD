var express = require('express');
var Wine=require('../../Models/Wine');
var router = express.Router();

router.get('/',function (req,resp) {
    Wine.getAllWines(function (err,rows) {
        if(err){
            resp.json(err);
        }
        else {
            resp.json(rows);
        }
    });
})



/*router.get('/',function (req,resp) {
    resp.send('ceva');
})*/

module.exports=router;