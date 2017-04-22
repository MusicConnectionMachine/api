module.exports = function(sequelize, DataTypes) {
    return sequelize.define('events', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        start:{
            type:DataTypes.STRING
        },
        end:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.TEXT
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

