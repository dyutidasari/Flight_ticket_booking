
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
 return sequelize.define('usertable', {
 user_id: {
 autoIncrement: true,
 type: DataTypes.INTEGER,
 allowNull: false,
 primaryKey: true
 },
 first_name: {
 type: DataTypes.STRING(100),
 allowNull: false
 },
 last_name: {
 type: DataTypes.STRING(100),
 allowNull: true
 },
 email_id: {
 type: DataTypes.STRING(100),
 allowNull: true
 },
 password: {
  type: DataTypes.STRING(255),
  allowNull: false
  },
 user_role: {
 type: DataTypes.STRING(1),
 allowNull: false
 },
  phone_number: {
 type: DataTypes.INTEGER,
 allowNull: false
 },
 created_by: {
 type: DataTypes.INTEGER,
 allowNull: false
 },
 updated_by: {
 type: DataTypes.INTEGER,
 allowNull: true
 },
 created_date_time: {
 type: DataTypes.DATE,
 allowNull: false
 },
 updated_date_time: {
 type: DataTypes.DATE,
 allowNull: true
 },
 status: {
 type: DataTypes.STRING(1),
 allowNull: false
 }
 }, {
 sequelize,
 tableName: 'usertable',
 schema: 'public',
 timestamps: false,
 indexes: [
 {
 name: "usertable_pkey",
 unique: true,
 fields: [
 { name: "user_id" },
 ]
 },
 ]
 });
};

