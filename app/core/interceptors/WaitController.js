const Wait = require('../models/Wait')
const User = require('../models/User')
const Game = require('../models/Game')

module.exports = {

    async store(req, res) {
        const { game_id, user_id } = req.params

        const game = await Game.findByPk(game_id)
        const user = await User.findByPk(user_id)

        if (!user || !game) res.status(400).json({ error: 'User or Game was not found!' })

        const [wait] = await Wait.findOrCreate({
            where: {
                game_id,
                user_id,
                status: 0
            }
        })

        return res.json(wait)
    },

    async list(req, res) {
        const { game_id } = req.params

        const game = await Game.findByPk(game_id)

        if (!game) res.status(400).json({ error: 'Game not found!' })

        const waits = await Wait.findAll({
            attributes: ['status', 'id'],
                // TODO colocar status diferente de 2 ou somente os que forem 0, e crriar um match controller q vai retornar os que foram stautus 1
            where: {
                game_id
                // TODO colocar status diferente de 2 ou somente os que forem 0, e crriar um match controller q vai retornar os que foram stautus 1
            },
            include: [
                { association: 'user', attributes: ['id', 'email'] },
                { association: 'game', attributes: ['id'] }
            ]
        })

        return res.json(waits)
    },

    async updateStatus(req, res) {
        const { wait_id, status } = req.params

        const wait = await Wait.findByPk(wait_id)

        if (!user || !game) res.status(400).json({ error: 'User or Game was not found!' })

       await Wait.update({status: status}, {
            where: {
              id: wait_id
            }
        })

        return res.json(wait)
    }
}