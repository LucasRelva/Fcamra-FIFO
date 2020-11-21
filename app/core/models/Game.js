const { Model, DataTypes } = require('sequelize')

class Game extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            slug: DataTypes.STRING,
            is_active: DataTypes.BOOLEAN,
            total_waits: {
                type: DataTypes.VIRTUAL,
            },
        }, {
            sequelize,
            tableName: 'games',
        })
    }

    static associate(models) {
        this.belongsToMany(models.Unity, { foreignKey: 'game_id', through: 'unity_games', as: 'unities' })
        this.hasMany(models.Wait, { foreignKey: 'game_id', as: 'waits' })
    }
}

module.exports = Game