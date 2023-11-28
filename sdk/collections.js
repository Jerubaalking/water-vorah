const Collections = require('./dbase/models/Collections');


module.exports = {
    show:  async (req, res)=>{
        try {
            // const collections = await new Collections();
            // collections.mnumber = '0001';
    
            res.json(await Collections.findAll())
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
    create:async (req, res)=>{
        try {
            const data = req.body;
            console.log(req.body)
            const collections = await new Collections();
            collections.amount = data.amount;
            collections.water_litres = data.water_litres;
    
            res.json(await collections.save())
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
};