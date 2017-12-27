var db=require('../Helpers/dbops');

var Wine={
    getAllWines: function (callback) {
        return db.query('SELECT * FROM vinuri',callback);
    },
}

module.exports=Wine;