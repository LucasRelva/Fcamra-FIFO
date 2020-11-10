const Unity = require('../models/Unity')
const slugify = require('slugify') 


module.exports = {
    async list(req, res) {
        const unities = await Unity.findAll()

        return res.json(unities)
    },

    async store(req, res) {
        const { name, is_active } = req.body

        const slug = slugify(name).toLowerCase()

        const unity = await Unity.create({ name, slug, is_active })

        return res.json(unity)
    },

    async delete(req, res) {    
        const { unity_id } = req.params
        
        const unity = await Unity.findByPk(unity_id)

        if(!unity) return res.status(400).json({ error: 'Unity not found' })
        
        await unity.destroy({
            where: {
                id: unity_id
            }
        })

        return res.json(unity) 
    },
}