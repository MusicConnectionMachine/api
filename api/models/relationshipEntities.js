module.exports = function (context) {
    return context.sequelize.define('relationshipEntities', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        entity_id: {
            type: context.Sequelize.UUID
        },
        name: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
