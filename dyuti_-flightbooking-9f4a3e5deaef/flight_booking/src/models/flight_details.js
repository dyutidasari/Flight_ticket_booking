const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flight_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    flight_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
    dept_airport: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    arrival_airport: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_tickets: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    availble_tickets: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fare: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    changed_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    change_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'flight_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "flight_details_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
