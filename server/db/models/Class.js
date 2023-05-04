const Sequelize = require('sequelize')
const db = require('../db')

const Class = db.define('class', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  settingId: {
    type: Sequelize.INTEGER,
    allowNull: false,
 }
})

module.exports = Class
