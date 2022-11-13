var DataTypes = require("sequelize").DataTypes;
var _device_info = require("./device_info");
var _flight_details = require("./flight_details");
var _flight_master = require("./flight_master");
var _flight_ticket_booking = require("./flight_ticket_booking");
var _role_table = require("./role_table");
var _runlog = require("./runlog");
var _user_log = require("./user_log");
var _users = require("./users");

function initModels(sequelize) {
  
  var flight_details = _flight_details(sequelize, DataTypes);
  var flight_master = _flight_master(sequelize, DataTypes);
  var flight_ticket_booking = _flight_ticket_booking(sequelize, DataTypes);
  var role_table = _role_table(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  

  return {
    flight_details,
    flight_master,
    flight_ticket_booking,
    role_table,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
