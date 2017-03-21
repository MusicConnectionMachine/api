module.exports = function (context) {
    return context.sequelize.define('releases', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        title: {
            type: context.Sequelize.TEXT
        },
        format: {
            type: context.Sequelize.TEXT
        },
        date: {
            type: context.Sequelize.DATEONLY
        },
        country: {
            type: context.Sequelize.TEXT
        },
        label: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
