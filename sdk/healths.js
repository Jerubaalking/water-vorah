const Healths = require('./dbase/models/Healths');


module.exports = {
    show:  async (req, res)=>{
        try {
            // const health = await new Healths();
            // health.mnumber = '0001';
    
            res.json(await Healths.findAll())
            
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
            const health = await new Healths();
            health.work_status = data.work_status;
            health.battery_level = data.battery_level;
            health.deviceId= deviceId;
    
            res.json(await health.save())
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
};