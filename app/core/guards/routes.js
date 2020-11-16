const express = require('express')
const userRoutes = require('./user.routes');
const gameRoutes = require('./game.routes');
const unityRoutes = require('./unity.routes');

const routes = express.Router();

routes.get('/', (req, res) => {
   return res.send('Ta daora! preocupa não, pode ir pro proximo passo.')
})

/**
 * Rotas da Unidade
 */
routes.use('/unities/',unityRoutes)

/**
 * Rotas de Usuário
 */
routes.use('/users',userRoutes);

/**
 * Rotas de Usuário
 */
routes.use('/game',gameRoutes);

module.exports = routes