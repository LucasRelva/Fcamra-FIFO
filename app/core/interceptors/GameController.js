const Game = require('../models/Game')
const Unity = require('../models/Unity')
const slugify = require('slugify')

module.exports = {
    async list(req, res) {

    },

    async store(req, res) {
        const { unity_id } = req.params
        const { name, is_active } = req.body

        const unity = await Unity.findByPk(unity_id)

        if (!unity) return res.status(400).json({ error: 'Unity not found' })

        const slug = slugify(name).toLowerCase()

        const [game, created] = await Game.findOrCreate({
            where: {
                name: name,
                slug: slug,
                is_active: is_active
            }
        })

        if (!created && !is_active) {
            game.update({ is_active: true })
        }

        await unity.addGame(game)

        return res.json(game)
    },

    async delete(req, res) {

    },
}
