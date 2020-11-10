const { Model, DataTypes } = require('sequelize')

class Match extends Model{
    static init(sequelize){
        super.init({
            completed: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'match',
        })
    }

    static associate(models) {
        this.belongsTo(models.Game, { foreignKey: 'game_id', as: 'game'})
        this.belongsToMany(models.User, { foreignKey: 'match_id', through: 'match_user', as: 'matchs' })
    }
}

module.exports = Match