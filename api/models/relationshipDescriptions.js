module.exports = function (context) {
    return context.sequelize.define('relationshipDescriptions', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        relationship_name:{
            type:context.Sequelize.STRING
        },
        inverse:{
            type:context.Sequelize.BOOLEAN
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};

