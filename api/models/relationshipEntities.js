module.exports = function(sequelize, DataTypes) {
    return sequelize.define('relationshipEntities', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.hasMany(models.relationships, {foreignKey: 'subjectId'});
                this.hasMany(models.relationships, {foreignKey: 'objectId'});

                this.belongsTo(models.entities);
            }
        }
    });
};
