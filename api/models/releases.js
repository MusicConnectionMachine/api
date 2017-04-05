module.exports = function(sequelize, DataTypes) {
    return sequelize.define('releases', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.TEXT
        },
        format: {
            type: DataTypes.TEXT
        },
        date: {
            type: DataTypes.DATEONLY
        },
        country: {
            type: DataTypes.TEXT
        },
        label: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function (models) {
                this.belongsToMany(models.artists, {through: 'ArtistPerformedRelease'});

                this.belongsTo(models.entities);
            }
        }
    });
};
