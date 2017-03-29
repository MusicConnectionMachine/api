module.exports = function (context) {
    return context.sequelize.define('relationshipOccurrences', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        page_id:{
            type:context.Sequelize.UUID
        },
        sentence_start:{
            type:context.Sequelize.INTEGER
        },
        sentence_stop:{
            type:context.Sequelize.INTEGER
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
