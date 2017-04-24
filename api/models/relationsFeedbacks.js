module.exports = function(sequelize, DataTypes) {
    return sequelize.define('relationsFeedbacks', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        feedback:{
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.relationships);
            }
        }
    });
};
