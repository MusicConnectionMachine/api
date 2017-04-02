module.exports = function (context) {
    return context.sequelize.define('relationshipTypes', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        relationship_type:{
            type:context.Sequelize.STRING
        },
        directed:{
            type:context.Sequelize.BOOLEAN
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};


