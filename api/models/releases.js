module.exports = function (sequelize, Sequelize) {
    return sequelize.define('releases', {
        title: {
            type: Sequelize.TEXT
        },
        release_id: {
            type: Sequelize.UUID,
            primaryKey: true
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
