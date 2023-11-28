// models/Collections.js
const { DataTypes } = require('sequelize');
const sequelize = require('../connect');
const Devices = require('./Devices');

const Collections = sequelize.define('collections', {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull:false,
    defaultValue:0.0
  },
  water_litres: {
    type: DataTypes.FLOAT,
    allowNull:false,
    defaultValue:0.0
  },

}, {paranoid:true}, sequelize);

Collections.belongsTo(Devices);
Devices.hasMany(Collections);
// sequelize.sync({force:true})
// Create the table if it doesn't exist
Collections.sync({ force: false }).then((dd) => {
  console.log('Collections table created (if not exists)');
});

module.exports = Collections;
