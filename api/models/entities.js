module.exports = function (context) {
    return context.sequelize.define('entities', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        entity_type: {
            type: Sequelize.ENUM('artist', 'work', 'release', 'instrument')
        },
        entity_id: {
            type: Sequelize.UUID
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
