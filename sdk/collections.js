const Collections = require('./dbase/models/Collections');
const Devices = require('./dbase/models/Devices');


module.exports = {
    show:  async (req, res)=>{
        try {
            // const collections = await new Collections();
            // collections.mnumber = '0001';
    
            res.json(await Collections.findAll({include:[{model:Devices}]}))
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
    create:async (req, res)=>{
        try {
            const data = req.body;
            const deviceId = req.params.id
            console.log(req.body, deviceId)
            const collections = new Collections();
            collections.amount = data.amount;
            collections.water_litres = data.water_litres;
            collections.deviceId= deviceId;
    
            res.json(await collections.save());
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
};