module.exports = function (context) {
    return context.sequelize.define('entities', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
