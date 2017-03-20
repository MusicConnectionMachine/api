module.exports = function (context) {
    return context.sequelize.define('releases', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        title: {
            type: Sequelize.TEXT
        },
        format: {
            type: Sequelize.TEXT
        },
        date: {
            type: Sequelize.DATEONLY
        },
        country: {
            type: Sequelize.TEXT
        },
        label: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
