var moment = require('moment');
module.exports = function (context) {
    return context.sequelize.define('artists', {
        name: {
            type: context.Sequelize.TEXT
        },
        id: {
            type: context.Sequelize.UUID,
            defaultValue: context.Sequelize.UUIDV4,
            primaryKey: true
        },
        artist_type: {
            type: context.Sequelize.ENUM('composer', 'musician')
        },
        dateOfBirth: {
            type: context.Sequelize.DATEONLY,
            //Sequelize DATEONLY returns full-date format with Timezone, we need
            //date in YYYY-MM-DD format.
            get:function(){
                return moment.utc(this.getDataValue('dateOfBirth')).format('YYYY-MM-DD');
            }
        },
        placeOfBirth: {
            type: context.Sequelize.TEXT
        },
        dateOfDeath: {
            type: context.Sequelize.DATEONLY,
            //Sequelize DATEONLY returns full-date format with Timezone, we need
            //date in YYYY-MM-DD format.
            get:function(){
                return moment.utc(this.getDataValue('dateOfDeath')).format('YYYY-MM-DD');
            }
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
        },
        wiki_link: {
            type: context.Sequelize.TEXT
        },
        wiki_pageid: {
            type: context.Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
}
