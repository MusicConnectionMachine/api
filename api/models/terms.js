module.exports = function(context) {
    return context.sequelize.define('terms', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        name: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true
    });
}
