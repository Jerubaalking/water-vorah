// models/Securities.js
const { DataTypes } = require('sequelize');
const sequelize = require('../connect');
const Devices = require('./Devices');

const Securities = sequelize.define('securities', {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  vibration_sensor: {
    type: DataTypes.ENUM('HIGH', 'LOW'),
    allowNull:false,
    defaultValue:'LOW'
  },
  safe_door_sensor: {
    type: DataTypes.ENUM('HIGH', 'LOW'),
    allowNull:false,
    defaultValue:'LOW'
  },

}, {paranoid:true}, sequelize);

Securities.belongsTo(Devices);
Devices.hasMany(Securities);
// Create the table if it doesn't exist
Securities.sync({ force: false }).then((dd) => {
  console.log('Securities table created (if not exists)');
});

module.exports = Securities;
