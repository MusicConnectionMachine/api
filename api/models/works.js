module.exports = function (context) {
    return context.sequelize.define('works', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        title: {
            type: Sequelize.TEXT
        },
        compositionyear: {
            type: Sequelize.INTEGER
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
