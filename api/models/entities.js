module.exports = function(sequelize, DataTypes) {
    return sequelize.define('entities', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.hasOne(models.artists);
                this.hasOne(models.works);
                this.hasOne(models.releases);
                this.hasOne(models.instruments);

                this.hasOne(models.contains);

                this.hasMany(models.relationshipEntities);

                this.hasMany(models.events);
            }
        }

    });
};
