const { Model, DataTypes } = require('sequelize')

class Match extends Model {
    static init(sequelize) {
        super.init({
            completed: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'matches',
        })
    }

    static associate(models) {
        this.belongsToMany(models.Wait, { foreignKey: 'match_id', through: 'match_waits', as: 'waits' })
    }
}

module.exports = Match