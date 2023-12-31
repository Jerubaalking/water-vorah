const Errors = require('./dbase/models/Errors');


module.exports = {
    show:  async (req, res)=>{
        try {
            // const error = await new Errors();
            // error.mnumber = '0001';
    
            res.json(await Errors.findAll())
            
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
            const error = await new Errors();
            error.err_num = data.err_num;
            error.err_message = data.err_message;
            error.deviceId= deviceId;
    
            res.json(await error.save())
            
          } catch(err) {
            // await transaction.rollback();
            console.log(err);
          }
    },
};