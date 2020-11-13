const { Model, DataTypes } = require('sequelize')

class User extends Model{
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'users',
        })
    }

    static associate(models) {
        this.hasMany(models.Wait, { foreignKey: 'user_id', as: 'waits' })
    }
}

module.exports = User