module.exports = function(sequelize, DataTypes) {
    return sequelize.define('relationshipDescriptions', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        relationship_name:{
            type:DataTypes.STRING
        },
        inverse:{
            type:DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.relationshipTypes);
                this.hasMany(models.relationships);
            }
        }
    });
};

