module.exports = function(sequelize, DataTypes) {
    return sequelize.define('works', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.TEXT
        },
        dedication: {
            type: DataTypes.TEXT
        },
        style: {
            type: DataTypes.TEXT
        },
        compositionyear: {
            type: DataTypes.INTEGER
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.belongsToMany(models.artists, {through:'ArtistComposedWork'});

                this.belongsTo(models.entities);
            }
        }
    });
};
