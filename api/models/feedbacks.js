module.exports = function(sequelize, DataTypes) {
    return sequelize.define('feedbacks', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        feedback:{
            type: DataTypes.BOOLEAN //TRUE - Like, FALSE - Wrong Data
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.entities);
            }
        }
    });
};
