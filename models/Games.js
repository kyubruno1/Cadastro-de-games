const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Games = db.define('Games', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    category: {
        type: DataTypes.STRING,
        required: true
    },
    concluded: {
        type: DataTypes.BOOLEAN,
    },

})

module.exports = Games