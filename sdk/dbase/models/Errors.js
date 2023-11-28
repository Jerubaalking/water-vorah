// models/Errors.js
const { DataTypes } = require('sequelize');
const sequelize = require('../connect');
const Devices = require('./Devices');

const Errors = sequelize.define('errors', {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  err_num: {
    type: DataTypes.INTEGER,
  },
  err_message: {
    type: DataTypes.STRING,
  },

}, {paranoid:true}, sequelize);

Errors.belongsTo(Devices);
Devices.hasMany(Errors);
// Create the table if it doesn't exist
Errors.sync({ force: false }).then((dd) => {
  console.log('Errors table created (if not exists)');
});

module.exports = Errors;
