const Securities = require('./dbase/models/Securities');


module.exports = {
    show:  async (req, res)=>{
        try {
            // const security = await new Securities();
            // security.mnumber = '0001';
    
            res.json(await Securities.findAll())
            
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
            const security = await new Securities();
            security.vibration_sensor = data.vibration_sensor;
            security.safe_door_sensor = data.safe_door_sensor;
            security.deviceId= deviceId;

    
            res.json(await security.save())
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
};