const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flight_master', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    airline: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    IATA: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ICAO: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    flight_number: {
      type: DataTypes.STRING(255),
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
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'flight_master',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "flight_master_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
