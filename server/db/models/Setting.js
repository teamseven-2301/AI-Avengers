const Sequelize = require('sequelize')
const db = require('../db')

const Setting = db.define('setting', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Setting
