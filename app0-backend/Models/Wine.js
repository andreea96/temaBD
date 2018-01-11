var db = require('../Helpers/dbops');

var Wine = {
    getAllWines: function (callback) {
        return db.query('SELECT v.vinId,v.nume,v.cost,v.Culoare,v.Tip,p.Denumire,p.concurs,p.an from vinuri as v left join Premii as p on p.vinID=v.vinID;', callback);
    },


    getWineInfo: function (id, callback) {
        return db.query('SELECT v.nume,v.cost,v.Culoare,v.Tip,p.Denumire,p.concurs,p.an from vinuri as v,Premii as p where v.vinID=' + id + ' and p.vinID=' + id, callback);
    },

    insertNewWine: function (wine, callback) {

        return db.query('INSERT INTO vinuri (nume,cost,Culoare,Tip) values ("' + wine.wineName + '",' + wine.wineCost +
            ',"' + wine.wineColor + '","' + wine.wineSweetness + '");', callback
        );
    },

    insertIntoCrama: function (cramaName, idVin, callback) {
        return db.query('INSERT INTO vin_crama (vinID,cramaID) values (' + idVin + ',(SELECT cramaID from ' +
            'Crama where denumire="' + cramaName + '"));', callback);
    },

    getWinesWithPrizes: function (callback) {
        return db.query('select v.nume,p.Denumire,p.an,p.concurs from vinuri as v inner join Premii as p on p.vinID=v.vinId', callback);
    },

    getOrdersWineQuantity: function (callback) {
        return db.query('select c.comandaNO,vc1.numWines from (select vc.comanda_id , count(*) as numWines from vin_comanda as vc group by comanda_id) as vc1,Comanda as c where vc1.comanda_id=c.comandaID;',
            callback);
    },

    getNrTypesOfWineInCramas: function (callback) {
        return db.query(
            'select c.denumire, nr_types_of_wine from (select vic.cramaID, count(*) as nr_types_of_wine from vin_crama as vic group by cramaID) as vic1,Crama as c where vic1.cramaID=c.cramaID;', callback
        );
    },
    //e adica intoarce o tabela cu cramele si tipurile de struguri din crama(compozitia vinurilor cramei) respectiva/respectivei
    getAllGraphesinCramas: function (callback) {
        return db.query('select vic.cramaID,sv.Denumire,c.denumire from Crama as c,(select v.nume,s.Denumire,s.StrugureID,v.vinId from Struguri as s left join vinuri as v on  s.strugureID = v.vinId) as sv right join vin_crama as vic on sv.vinID=vic.vinId where c.cramaID=vic.cramaID',callback);
    },

    getNrWineswithPrizesFromEveryOrder: function (callback) {
        return db.query(
            'select count(wo.vin_id) as vinuri_premiate,wo.comandaNo from (select comandaNo,vc.vin_id from Comanda as c inner join vin_comanda as vc where vc.comanda_id=c.comandaID) wo inner join Premii as p on p.vinID=wo.vin_id group by wo.comandaNo;',
            callback);
    },

    getAllPrizedGraphes: function (callback) {
        return db.query(
            'select S.Denumire from Struguri as S, (select vinuri.vinId, vinuri.nume from vinuri inner join Premii as p on p.vinID=vinuri.vinId) as vinuri_premiate where S.strugureID=vinuri_premiate.vinId',
            callback
        );
    },

    getFullOrderPrice: function (callback) {
        return db.query(
            ' select vc.comandaNO,sum(vc.cost) as suma from ((select vc.comanda_id,v.nume,v.cost,c.comandaNO from Comanda as c,vin_comanda as vc inner join vinuri as v on v.vinId=vc.vin_id where c.comandaID=vc.comanda_id ) vc) group by vc.comanda_id;',
            callback
        );
    },

    getTop3MostOrderedWine: function (callback) {
        return db.query(
            'select vc.vin_id,count(vc.comanda_id) as cantiate,v.nume from vin_comanda as vc,vinuri as v where v.vinId=vc.vin_id  group by vin_id order by count(vc.comanda_id) desc  limit 3',
            callback
        );
    },
    deleteWine: function (id,callback) {
        return db.query('delete from vinuri where vinId='+id+';',callback);
    }
}


module.exports = Wine;

