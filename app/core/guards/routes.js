const express = require('express')
const UnityController = require('../interceptors/UnityController')
const GameController = require('../interceptors/GameController')
const UserController = require('../interceptors/UserController')
const MatchController = require('../interceptors/MatchController')

const routes = express.Router()

routes.get('/', (req, res) => {
   return res.send('Ta daora! preocupa não, pode ir pro proximo passo.')
})

/**
 * Rotas da Unidade
 */
routes.get('/unities/list', UnityController.list)
routes.delete('/unities/:unity_id', UnityController.delete)
routes.post('/unities/create/', UnityController.store)

/**
 * Rotas de Game com Unidade
 */
routes.get('/unities/list/:unity_id/games', GameController.list)
routes.delete('/unities/:unity_id/games', GameController.delete)
routes.post('/unities/create/:unity_id/games', GameController.store)

/**
 * Rotas de Usuário
 */
routes.get('/users/list', UserController.list)
routes.delete('/users/:user_id', UserController.delete)
routes.post('/users/create/', UserController.store)

/**
 * Rotas de Partidas/Match
 */
routes.get('/matchs/list', MatchController.list)
routes.delete('/matchs/:game_id', MatchController.delete)
routes.post('/matchs/:game_id/:user_id/create/', MatchController.store)

module.exports = routes