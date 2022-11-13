const env = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  // operatorsAliases: false,
  operatorsAliases: 0,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require('../models/usersschema')(sequelize, Sequelize);
db.flight_ticket_booking = require('../models/flight_ticket_booking')(sequelize, Sequelize);
db.flight_master = require('../models/flight_master')(sequelize, Sequelize);
db.flight_details = require('../models/flight_details')(sequelize, Sequelize);


module.exports = db;