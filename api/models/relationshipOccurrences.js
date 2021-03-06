module.exports = function(sequelize, DataTypes) {
    return sequelize.define('relationshipOccurrences', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        sentence_start:{
            type:DataTypes.INTEGER
        },
        sentence_stop:{
            type:DataTypes.INTEGER
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.websites);
                this.hasMany(models.relationships);
            }
        }
    });
};
