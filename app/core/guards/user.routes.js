const express = require('express')
const UserController = require('../interceptors/UserController')

const userRoutes = express.Router();
userRoutes.get('/', UserController.list)
userRoutes.delete('/:user_id', UserController.delete)
userRoutes.post('/', UserController.store)
userRoutes.post('/infos/', UserController.infos)

module.exports = userRoutes;