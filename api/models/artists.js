module.exports = function (context) {
    return context.sequelize.define('artists', {
        name: {
            type: context.Sequelize.TEXT
        },
        id: {
            type: context.Sequelize.UUID,
            primaryKey: true
        },
        artist_type: {
            type: context.Sequelize.ENUM('composer', 'musician')
        },
        picture: {
            type: context.Sequelize.BLOB
        },
        dateOfBirth: {
            type: context.Sequelize.DATEONLY
        },
        placeOfBirth: {
            type: context.Sequelize.TEXT
        },
        dateOfDeath: {
            type: context.Sequelize.DATEONLY
        },
        placeOfDeath: {
            type: context.Sequelize.TEXT
        },
        nationality: {
            type: context.Sequelize.TEXT
        },
        tags: {
            type: context.Sequelize.ARRAY(context.Sequelize.TEXT)
        },
        pseudonym: {
            type: context.Sequelize.ARRAY(context.Sequelize.TEXT)
        },
        source_link: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
}
