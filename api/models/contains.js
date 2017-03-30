module.exports = function (context) {
    return context.sequelize.define('contains', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        occurrences: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};


