const { DataTypes } = require("sequelize");
const sequelize = require("../connect");

const UserRoles = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UserRoles.sync({ force: false }).then((dd) => {
  console.log("UserRoles table created (if not exists)");
});

module.exports = UserRoles;
