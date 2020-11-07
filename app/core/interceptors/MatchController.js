const Game = require('../models/Game');
const Match = require('../models/Match');


module.exports = {
    async list(req, res) {
        const matchs = await Match.findAll();
        if(!matchs) res.status(404).json({error:'error',msg: 'matchs not found!'})
        return res.json(matchs)
    },

    async store(req, res) {
        const { game_id, user_id } = req.params

        // const match = await Match.create({ name, is_active })

        // return res.json(match)
        return res.status(200)
    },

    async delete(req, res) {    
        const { match_id } = req.params
        
        const match = await Match.findByPk(match_id)

        if(!match) return res.status(400).json({ error: 'Match not found' });
        
        await match.destroy({
            where: {
                id: match_id
            }
        });
        return res.json(match) 
    },
}