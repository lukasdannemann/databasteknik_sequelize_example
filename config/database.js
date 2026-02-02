require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Viktigt för Supabase!
    }
  },
  logging: console.log // Kan sätta till false senare
});

module.exports = sequelize;