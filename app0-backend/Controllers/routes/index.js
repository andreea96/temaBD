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

router.get('/winesWithPrizes',function (req,resp) {
    Wine.getWinesWithPrizes(function (err,result) {
        if(err)
            resp.json(err);
        else
        {
            resp.json(result);
        }
    })
})

router.get('/ordersWineQuantity',function (req,resp) {
    Wine.getOrdersWineQuantity(function (err,result) {
        if(err)
            resp.json(err);
        else
        {
            resp.json(result);
        }
    })
})

router.get('/NrTypesOfWineInCramas',function (req,resp) {
    Wine.getNrTypesOfWineInCramas(function (err,result) {
        if(err)
        {
            resp.json(err);
        }
        else {
            resp.json(result);
        }
    })
})

router.get('/AllGraphesinCramas',function (req,resp) {
    Wine.getAllGraphesinCramas(function (err,result) {
        if(err)
        {
            resp.json(err);
        }
        else {
            resp.json(result);
        }
    })
})

router.get('/NrWineswithPrizesFromEveryOrder',function (req,resp) {
    Wine.getNrWineswithPrizesFromEveryOrder(function (err,result) {
        if(err)
        {
            resp.json(err);
        }
        else {
            resp.json(result);
        }
    })
})

router.get('/FullOrderPrice',function (req,resp) {
    Wine.getFullOrderPrice(function (err,result) {
        if(err)
        {
            resp.json(err);
        }
        else {
            resp.json(result);
        }
    })
})

router.get('/Top3MostOrderedWine',function (req,resp) {
    Wine.getTop3MostOrderedWine(function (err,result) {
        if(err)
        {
            resp.json(err);
        }
        else {
            resp.json(result);
        }
    })
})


router.get('/AllPrizedGraphes',function (req,resp) {
    Wine.getAllPrizedGraphes(function (err,result) {
        if(err)
        {
            resp.json(err);
        }
        else {
            resp.json(result);
        }
    })
})

router.get('/delete/:vinID',function (req,res) {
    Wine.deleteWine(req.params.vinID,function (err,result) {
        if(err)
            res.json(err);
        else res.send('success');
    })
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