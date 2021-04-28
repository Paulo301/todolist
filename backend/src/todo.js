const Sequelize = require('sequelize');
const database = require('./db');

const Todo = database.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    },
    descricao: Sequelize.STRING,
    criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    dataRealizacao: {
        type: Sequelize.DATE
    },
})

module.exports = Todo;