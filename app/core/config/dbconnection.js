const Sequelize = require('sequelize')
const dbConfig = require('./database')
const Unity = require('../models/Unity')
const Game = require('../models/Game')

const connection = new Sequelize(dbConfig)

Unity.init(connection)
Game.init(connection)

Unity.associate(connection.models)
Game.associate(connection.models)

module.exports = connection
