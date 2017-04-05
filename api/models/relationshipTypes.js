module.exports = function(sequelize, DataTypes) {
    return sequelize.define('relationshipTypes', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        relationship_type:{
            type:DataTypes.STRING
        },
        directed:{
            type:DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.hasMany(models.relationshipDescriptions);
            }
        }
    });
};


