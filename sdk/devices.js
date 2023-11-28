const Collections = require('./dbase/models/Collections');
const Devices = require('./dbase/models/Devices');
const Errors = require('./dbase/models/Errors');


module.exports = {
    show:  async (req, res)=>{
        try {
            // const device = await new Devices();
            // device.mnumber = '0001';
    
            res.json(await Devices.findAll({include:[{model:Errors}, {model:Collections}]}))
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
    create:async (req, res)=>{
        try {
            const data = req.body;
            console.log(req.body)
            const device = await new Devices();
            device.mnumber = data.mnumber;
            device.location = data.location;
            device.make = data.make;
            device.made_in = data.made_in;
            device.deviceId = deviceId;
    
            res.json(await device.save())
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
};