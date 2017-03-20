module.exports = function (context) {
    return context.sequelize.define('pages', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        url: {
            type: Sequelize.TEXT
        },
        filelocation: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
