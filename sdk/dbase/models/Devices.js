// models/Devices.js
const { DataTypes } = require('sequelize');
const sequelize = require('../connect');

const Devices = sequelize.define('devices', {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  mnumber: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  make: {
    type: DataTypes.STRING,
  },
  made_in: {
    type: DataTypes.STRING,
  },

}, {paranoid:true}, sequelize);

// Create the table if it doesn't exist
Devices.sync({ force: false }).then((dd) => {
  console.log('Devices table created (if not exists)');
});

module.exports = Devices;
