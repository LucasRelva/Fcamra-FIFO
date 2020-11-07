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
}

module.exports = User