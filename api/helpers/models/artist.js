module.exports = function (sequelize, Sequelize) {
    return sequelize.define('artist', {
        name: {
            type: Sequelize.TEXT
        },
        artist_id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        artist_type: {
            type: Sequelize.ENUM('composer', 'musician')
        },
        picture: {
            type: Sequelize.BLOB
        },
        dateOfBirth: {
            type: Sequelize.DATEONLY
        },
        placeOfBirth: {
            type: Sequelize.TEXT
        },
        dateOfDeath: {
            type: Sequelize.DATEONLY
        },
        placeOfDeath: {
            type: Sequelize.TEXT
        },
        nationality: {
            type: Sequelize.TEXT
        },
        tags: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
        pseudonym: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
        source_link: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
}



