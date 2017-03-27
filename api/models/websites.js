module.exports = function(context) {
    return context.sequelize.define('websites', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        url: {
            type: context.Sequelize.TEXT
        },
        download_link: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true
    });
}