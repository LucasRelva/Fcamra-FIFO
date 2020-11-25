const express = require('express')
const WaitController = require('../interceptors/WaitController');

const waitRoutes = express.Router();

/**
 * Rotas de Esperas
 */
waitRoutes.get('/:game_id/:unity_id', WaitController.list)
waitRoutes.post('/:game_id/:user_id/:unity_id', WaitController.store)
waitRoutes.put('/:wait_id/:status', WaitController.updateStatus)

module.exports = waitRoutes