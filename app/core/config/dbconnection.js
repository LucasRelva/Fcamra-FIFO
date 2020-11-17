const Sequelize = require('sequelize')
const dbConfig = require('./database')
const Unity = require('../models/Unity')
const Game = require('../models/Game')
const User = require('../models/User')
const Wait = require('../models/Wait')
const Match = require('../models/Match')

const connection = new Sequelize(dbConfig)

Unity.init(connection)
Game.init(connection)
User.init(connection)
Wait.init(connection)
Match.init(connection)

Unity.associate(connection.models)
Game.associate(connection.models)
User.associate(connection.models)
Wait.associate(connection.models)
Match.associate(connection.models)

module.exports = connection
