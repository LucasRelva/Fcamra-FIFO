const User = require('../models/User')


module.exports = {
    async list(req, res) {
        const users = await User.findAll();
        return res.json(users)
    },

    async store(req, res) {
        const { name, is_active } = req.body

        const user = await User.create({ name, is_active })

        return res.json(user)
    },

    async delete(req, res) {    
        const { user_id } = req.params
        
        const user = await User.findByPk(user_id)

        if(!user) return res.status(400).json({ error: 'User not found' })
        
        await user.destroy({
            where: {
                id: user_id
            }
        })

        return res.json(user) 
    },
}