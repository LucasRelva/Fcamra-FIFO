const express = require('express')
const GameController = require('../interceptors/GameController')

const gameRoutes = express.Router();

/**
 * Rotas de Game com Unidade
 */
gameRoutes.get('/:unity_id', GameController.list)
gameRoutes.get('/infos/:unity_id/:game_id', GameController.read)
gameRoutes.delete('/:unity_id/:game_id', GameController.delete)
gameRoutes.post('/:unity_id', GameController.store)

module.exports = gameRoutes;