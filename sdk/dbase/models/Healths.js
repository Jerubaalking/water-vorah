// models/Healths.js
const { DataTypes } = require('sequelize');
const sequelize = require('../connect');
const Devices = require('./Devices');

const Healths = sequelize.define('healths', {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  work_status: {
    type: DataTypes.ENUM('ACTIVE', 'IDLE', 'INACTIVE', 'UNKNOWN'),
    allowNull:false,
    defaultValue:'UNKNOWN'
  },
  battery_level: {
    type: DataTypes.INTEGER,
    defaultValue:0,
    allowNull:false
  }

}, {paranoid:true}, sequelize);

Healths.belongsTo(Devices);
Devices.hasMany(Healths);
// Create the table if it doesn't exist
Healths.sync({ force: false }).then((dd) => {
  console.log('Healths table created (if not exists)');
});

module.exports = Healths;
