module.exports = function(sequelize, DataTypes) {
    return sequelize.define('websites', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        url: {
            type: DataTypes.TEXT
        },
        blob_url: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.hasMany(models.relationshipOccurrences);
            }
        }
    });
};
