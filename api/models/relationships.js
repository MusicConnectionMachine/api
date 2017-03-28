module.exports = function (context) {
    return context.sequelize.define('relationships', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        relationship_occurrence:{
            type:context.Sequelize.INTEGER
        },
        relationship_quality:{
            type:context.Sequelize.FLOAT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
