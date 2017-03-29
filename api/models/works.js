module.exports = function (context) {
    return context.sequelize.define('works', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        title: {
            type: context.Sequelize.TEXT
        },
        compositionyear: {
            type: context.Sequelize.INTEGER
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
