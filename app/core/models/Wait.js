const { Model, DataTypes } = require('sequelize')

class Wait extends Model{
    static init(sequelize){
        super.init({
            status: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'waits',
        })
    }

     static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' } )
        this.belongsTo(models.Game, { foreignKey: 'game_id', as: 'game' } )
        this.belongsToMany(models.Match, { foreignKey: 'wait_id', through: 'match_waits', as: 'matches' })
        this.belongsTo(models.Unity, { foreignKey: 'unity_id', as: 'unity' })
     }
}

module.exports = Wait