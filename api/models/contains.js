module.exports = function(sequelize, DataTypes) {
    return sequelize.define('contains', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        occurrences: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.websites);
                this.belongsTo(models.entities);
            }
        }
    });

};


