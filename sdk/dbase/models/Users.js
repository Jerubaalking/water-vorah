const { DataTypes } = require('sequelize');
const sequelize = require('../connect');
const UserRoles = require('./UserRoles.js');


const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true,
      },
    usersname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{paranoid:true});
  
  // Define associations
 
  
Users.belongsTo(UserRoles);
UserRoles.hasMany(Users);
Users.sync({ force: false }).then((dd) => {
    console.log('Users table created (if not exists)');
  });
  module.exports = Users;