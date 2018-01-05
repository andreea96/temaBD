var db=require('../Helpers/dbops');

var Wine={
    getAllWines: function (callback) {
        return db.query('SELECT v.nume,v.cost,v.Culoare,v.Tip,p.Denumire,p.concurs,p.an from vinuri as v left join Premii as p on p.vinID=v.vinID;',callback);
    },

    getWineInfo: function (id,callback) {
        return db.query('SELECT v.nume,v.cost,v.Culoare,v.Tip,p.Denumire,p.concurs,p.an from vinuri as v,Premii as p where v.vinID='+id+' and p.vinID='+id,callback);
    }

}

module.exports=Wine;