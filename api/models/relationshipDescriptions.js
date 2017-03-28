module.exports = function (context) {
    return context.sequelize.define('relationshipDescriptions', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        relationship_name:{
            type:context.Sequelize.STRING
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};

