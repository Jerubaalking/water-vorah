
const Roles = require('./dbase/models/UserRoles.js');

module.exports ={
show: async (req, res)=>{
    try {
        // const user = await new Roles();
        // user.mnumber = '0001';

        res.json(await Roles.findAll())
        
      } catch(err) {
        // await transaction.rollback();
        console.log(err);
      }
},
create: async (req, res)=>{
    try {
        const data = req.body;
        const user = await new Roles();
        user.username = data.username;
        user.password = data.password;

        res.json(await data.save())
        
      } catch(err) {
        // await transaction.rollback();
        console.log(err);
      }
}
}