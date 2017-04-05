module.exports = function(sequelize, DataTypes) {
    return sequelize.define('relationships', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        confidence: {
            type: DataTypes.FLOAT
        },
        relation: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.relationshipDescriptions);
                this.belongsTo(models.relationshipOccurrences);
                this.belongsTo(models.relationshipEntities, {foreignKey: 'subjectId', as: 'Subject'});
                this.belongsTo(models.relationshipEntities, {foreignKey: 'objectId', as: 'Object'});

            }
        }
    });
};
