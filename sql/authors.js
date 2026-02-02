const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Authors = sequelize.define('Authors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year_of_birth: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'authors',  // ← Ändrat från 'Authors' till 'authors'
    timestamps: true,
    createdAt: 'createdat',  // ← Lägg till dessa
    updatedAt: 'updatedat'   // ← för att matcha din databas
});

module.exports = Authors;