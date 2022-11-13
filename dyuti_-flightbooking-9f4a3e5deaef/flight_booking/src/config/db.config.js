const db = {
    database: 'flightbooking',
    username: 'postgres',
    password: '0414',
    host: '127.0.0.1',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
module.exports = db;