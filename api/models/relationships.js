module.exports = function (context) {
    return context.sequelize.define('relationships', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        subject_id: {
            type: context.Sequelize.UUID
        },
        object_id: {
            type: context.Sequelize.UUID
        },
        type_id: {
            type: context.Sequelize.UUID
        },
        occurrence_id: {
            type: context.Sequelize.UUID
        },
        confidence: {
            type: context.Sequelize.FLOAT
        },
        relation: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
