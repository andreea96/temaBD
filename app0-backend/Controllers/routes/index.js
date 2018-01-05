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

router.get('/:vinID',function (req,resp) {

    Wine.getWineInfo(req.params.vinID ,function (err,rows) {

        if(err){
            resp.json(err);
        }
        else{
            console.log(rows);
            resp.json(rows);

    }
    })
})





/*router.get('/',function (req,resp) {
    resp.send('ceva');
})*/

module.exports=router;