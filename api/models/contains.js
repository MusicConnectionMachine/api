module.exports = function (sequelize, Sequelize) {
    return sequelize.define('contains', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        occurrences: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};


