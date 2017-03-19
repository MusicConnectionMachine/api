module.exports = function (sequelize, Sequelize) {
    return sequelize.define('instruments', {
        name: {
            type: Sequelize.TEXT
        },
        instrument_id: {
            type: Sequelize.UUID,
            primaryKey: true
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
