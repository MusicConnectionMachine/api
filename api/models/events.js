module.exports = function (context) {
    return context.sequelize.define('events', {
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        start:{
            type:context.Sequelize.STRING
        },
        end:{
            type:context.Sequelize.UUID
        },
        description:{
            type:context.Sequelize.BOOLEAN
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};

