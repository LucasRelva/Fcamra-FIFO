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
            where: {
                game_id
            },
            include: [
                { association: 'user', attributes: ['id', 'email'] },
                { association: 'game', attributes: ['id'] }
            ]
        })

        return res.json(waits)
    },

    async updateStatus(req, res) {
        const { game_id, user_id, status } = req.params

        const user = await User.findByPk(user_id)
        const game = await Game.findByPk(game_id)

        if (!user || !game) res.status(400).json({ error: 'User or Game was not found!' })

        const wait = await Wait.update({status: status}, {
            where: {
                user_id,
                game_id
            }
        })

        if (wait > 0 && status == 2) {
            await user.setWaits([])
            await game.setWaits([])
        }

       await Wait.destroy({
            where: {
                status: 2
            }
        })

        return res.json(wait)
    }
}