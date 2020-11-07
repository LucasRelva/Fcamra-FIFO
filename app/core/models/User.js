const { Model, DataTypes } = require('sequelize')

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            is_active: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'users',
        })
    }

    static associate(models) {
        this.belongsToMany(models.Match, { foreignKey: 'match_id', through: 'match_user', as: 'matchs' })
    }
}

module.exports = User