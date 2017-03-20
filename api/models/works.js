module.exports = function (sequelize, Sequelize) {
    return sequelize.define('works', {
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
