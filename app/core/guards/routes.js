const express = require('express')
const UnityController = require('../interceptors/UnityController')
const GameController = require('../interceptors/GameController')

const routes = express.Router()

routes.get('/', (req, res) => {
   return res.send('Ta daora! preocupa não, pode ir pro proximo passo.')
})

routes.get('/unities/list', UnityController.list)
routes.delete('/unities/:unity_id', UnityController.delete)
routes.post('/unities/create', UnityController.store)

routes.get('/unities/list/:unity_id/games', GameController.list)
routes.delete('/unities/:unity_id/games', GameController.delete)
routes.post('/unities/create/:unity_id/games', GameController.store)

module.exports = routes