module.exports = function (sequelize, Sequelize) {
    return sequelize.define('works', {
        title: {
            type: Sequelize.TEXT
        },
        work_id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        compositionyear: {
            type: Sequelize.INTEGER
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
