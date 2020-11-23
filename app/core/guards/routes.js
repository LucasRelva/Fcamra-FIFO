const express = require('express')
const userRoutes = require('./user.routes');
const gameRoutes = require('./game.routes');
const unityRoutes = require('./unity.routes');
const waitRoutes = require('./wait.routes');
const matchRoutes = require('./match.routes')

const routes = express.Router();

routes.get('/', (req, res) => {
   return res.send('Ta daora! preocupa não, pode ir pro proximo passo.')
})

/**
 * Rotas da Unidade
 */
routes.use('/unities',unityRoutes)

/**
 * Rotas de Usuário
 */
routes.use('/users',userRoutes);

/**
 * Rotas de Usuário
 */
routes.use('/games',gameRoutes);

/**
 * Rotas de Esperas
 */
routes.use('/waits',waitRoutes)

/**
 * Rotas de Match
 */
routes.use('/match',matchRoutes)

module.exports = routes