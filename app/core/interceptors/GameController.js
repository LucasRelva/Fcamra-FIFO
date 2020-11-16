const Game = require('../models/Game');
const Unity = require('../models/Unity');
const Wait = require('../models/Wait');
const slugify = require('slugify');
const Sequelize, { Op } = require('sequelize');

module.exports = {
    async list(req, res) {
        const { unity_id } = req.params
       /*  const unity = await Unity.findByPk(unity_id, {
            include: { 
                association: 'games', 
                through: { 
                    attributes: ['unity_id'] 
                }
            }
        });

        return res.json(unity.games); */

        const games = await Game.findAll({
            attributes: { 
                name,
                slug,
                include: [[Sequelize.fn("COUNT", Sequelize.col("waits.id")), "totalWait"]] 
            },
            include: {
                association: 'waits',
                through: {
                    attributes: ['game_id']
                },
                where: {
                    status: {
                        [Op.in]: [0,1]
                    }
                }
            },
            include:{
                association: 'unities',
                through: {
                    attributes: ['game_id']
                },
                where: {
                    unity_id
                }
            },
        });

        return res.json(games);
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

        if (!created) {
            game.update({ is_active: true })
        }

        await unity.addGame(game)

        return res.json(game)
    },

    async delete(req, res) {
        const { unity_id } = req.params
        const { name } = req.body

        const unity = await Unity.findByPk(unity_id) 
        
        if (!unity) return res.status(400).json({ error: 'Unity not found' })

        const game = await Game.findOne({
            where: {
                name: name
            }
        })

        await unity.removeGame(game)

        return res.json(game)
    },
}
