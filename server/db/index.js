//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Setting = require('./models/Setting');
const Role = require('./models/Role');

//associations could go here!

Setting.hasMany(Role, {
  foreignKey: 'settingId',
});

Role.belongsTo(Setting);

module.exports = {
  db,
  models: {
    User,
    Setting,
    Role,
  },
};
