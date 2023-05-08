//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Setting = require('./models/Setting')
const Class = require('./models/Class')

//associations could go here!

Setting.hasMany(Class, {
  foreignKey: "settingId",
});

Class.belongsTo(Setting);




module.exports = {
  db,
  models: {
    User,
    Setting,
    Class
  },
}


