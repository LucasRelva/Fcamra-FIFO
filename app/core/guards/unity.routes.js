const express = require('express')
const UnityController = require('../interceptors/UnityController');

const unityRoutes = express.Router();
/**
 * Rotas da Unidade
 */
unityRoutes.get('/', UnityController.list)
unityRoutes.delete('/:unity_id', UnityController.delete)
unityRoutes.post('/', UnityController.store)

module.exports = unityRoutes;