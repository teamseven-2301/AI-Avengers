const Sequelize = require("sequelize");
const db = require("../db");

const Role = db.define("role", {
  name: {
    type: Sequelize.STRING,
    // unique: true,
    allowNull: false,
  },
  settingId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prompt: {
    type: Sequelize.STRING(1000),
    allowNull: true,
  },
});

module.exports = Role;
