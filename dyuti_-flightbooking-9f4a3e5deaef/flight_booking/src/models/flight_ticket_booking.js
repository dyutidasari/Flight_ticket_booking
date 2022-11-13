const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flight_ticket_booking', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    flight_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ticket_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    booking_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    seat_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    changed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'flight_ticket_booking',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "flight_ticket_booking_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
