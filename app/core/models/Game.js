const { Model, DataTypes } = require('sequelize')

class Game extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            slug: DataTypes.STRING,
            is_active: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'games',
        })
    }

    static associate(models) {
        this.belongsToMany(models.Unity, { foreignKey: 'game_id', through: 'unity_games', as: 'unities' })
        this.hasMany(models.Match, { as: 'matchs' })
    }
}

module.exports = Game