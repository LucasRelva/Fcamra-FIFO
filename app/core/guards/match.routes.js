const express = require('express')
const MatchController = require('../interceptors/MatchController')

const gameRoutes = express.Router();

/**
 * Rotas de Matches
 */
gameRoutes.get('/:wait_id', MatchController.list)
gameRoutes.delete('/:match_id', MatchController.delete)
gameRoutes.post('/:wait_id', MatchController.store)

module.exports = gameRoutes;