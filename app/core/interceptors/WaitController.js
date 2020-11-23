const Wait = require('../models/Wait')
const User = require('../models/User')
const Game = require('../models/Game')
const { Op } = require('sequelize')
const Unity = require('../models/Unity')

module.exports = {

    async store(req, res) {
        const { game_id, user_id, unity_id } = req.params

        const game = await Game.findByPk(game_id)
        const user = await User.findByPk(user_id)
        const unity = await Unity.findByPk(unity_id)

        if (!user || !game || !unity) res.status(400).json({ error: 'User, Game or Unity was not found!' })

        const [wait] = await Wait.findOrCreate({
            where: {
                game_id,
                user_id,
                unity_id,
                status: 0
            }
        })

        return res.json(wait)
    },

    async list(req, res) {
        const { game_id, unity_id } = req.params

        const game = await Game.findByPk(game_id)

        if (!game) res.status(400).json({ error: 'Game not found!' })

        const waits = await Wait.findAll({
            attributes: ['status', 'id'],
        
            where: {
                game_id,
                unity_id, 
                status: {[Op.notIn]: [2]}
            },
            include: [
                { association: 'user', attributes: ['id', 'email'] },
                // { association: 'game', attributes: ['id'] },
                // { association: 'unity', attributes: ['slug'] }
            ]
        })

        return res.json(waits)
    },

    async updateStatus(req, res) {
        const { wait_id, status } = req.params

        const wait = await Wait.findByPk(wait_id)

        if (!wait) res.status(400).json({ error: 'Wait not found!' })

       await Wait.update({status: status}, {
            where: {
              id: wait_id
            }
        })

        return res.json(wait)
    }
}