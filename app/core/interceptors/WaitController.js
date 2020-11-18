const Wait = require('../models/Wait')
const User = require('../models/User')
const Game = require('../models/Game')
const { update, findAll } = require('../models/Wait')

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
        const game = await game.findByPk(game_id)

        if (!user) res.status(400).json({ error: 'User not found!' })

        const wait = await findAll({
            where: {
                user_id
            }
        })

        await wait.update({ status: status })

        if(wait.status == 2) {
            await user.removeWait(wait)
            await game.removeWait(wait)
        }
    }
}