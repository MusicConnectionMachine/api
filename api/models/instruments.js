module.exports = function(sequelize, DataTypes) {
    return sequelize.define('instruments', {
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
            associate: function (models) {
                this.belongsToMany(models.artists, {through: 'ArtistPlayedInstrument'});
                this.belongsToMany(models.artists, {through: 'ArtistComposedInstrument'});

                this.belongsTo(models.entities);
            }
        }
    });
};
