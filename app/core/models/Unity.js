const { Model, DataTypes } = require('sequelize')

class Unity extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            slug: DataTypes.STRING,
            is_active: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'unities',
        })
    }

    static associate(models) {
        this.belongsToMany(models.Game, { foreignKey: 'unity_id', through: 'unity_games', as: 'games' })
    }
}

module.exports = Unity