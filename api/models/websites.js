module.exports = function (context) {
    return context.sequelize.define('websites', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        url: {
            type: context.Sequelize.TEXT
        },
        blob_url: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
