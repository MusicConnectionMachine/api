module.exports = function (context) {
    return context.sequelize.define('entities', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        entity_type: {
            type: context.Sequelize.ENUM('artist', 'work', 'release', 'instrument')
        },
        entity_id: {
            type: context.Sequelize.UUID
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
