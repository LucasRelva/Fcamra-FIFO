const express = require('express')
const UnityController = require('../interceptors/UnityController')
const GameController = require('../interceptors/GameController')
const UserController = require('../interceptors/UserController')

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
routes.delete('/users/:unity_id', UserController.delete)
routes.post('/users/create/', UserController.store)

module.exports = routes