const Sequelize = require('sequelize')
const db = require('../db')

// o: since class is a reserved word like Sabrina mentioned
//  maybe try using role
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
