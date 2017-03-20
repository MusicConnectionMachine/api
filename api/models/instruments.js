module.exports = function (context) {
    return context.sequelize.define('instruments', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        name: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
