module.exports = function(context) {
    return context.sequelize.define('contains_terms', {
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        term_id: {
            type: context.Sequelize.INTEGER
        },
        website_id: {
            type: context.Sequelize.INTEGER
        },
        occurences: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true
    });
}
