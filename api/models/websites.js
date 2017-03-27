module.exports = function (context) {
    return context.sequelize.define('websites', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        url: {
            type: context.Sequelize.TEXT
        },
        blobl_url: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
