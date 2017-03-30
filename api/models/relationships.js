module.exports = function (context) {
    return context.sequelize.define('relationships', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        confidence: {
            type: context.Sequelize.FLOAT
        },
        relation: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
