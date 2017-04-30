var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('artists', {
        name: {
            type: DataTypes.TEXT
        },
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        artist_type: {
            type: DataTypes.ENUM('composer', 'musician')
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            //Sequelize DATEONLY returns full-date format with Timezone, we need
            //date in YYYY-MM-DD format.
            get:function(){
                const dateValue = this.getDataValue('dateOfBirth');
                if (!dateValue) {
                    return null;
                }
                return moment.utc(dateValue).format('YYYY-MM-DD');
            }
        },
        placeOfBirth: {
            type: DataTypes.TEXT
        },
        dateOfDeath: {
            type: DataTypes.DATEONLY,
            //Sequelize DATEONLY returns full-date format with Timezone, we need
            //date in YYYY-MM-DD format.
            get:function(){
                const dateValue = this.getDataValue('dateOfDeath');
                if (!dateValue) {
                    return null;
                }
                return moment.utc(dateValue).format('YYYY-MM-DD');
            }
        },
        placeOfDeath: {
            type: DataTypes.TEXT
        },
        nationality: {
            type: DataTypes.TEXT
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        pseudonym: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        source_link: {
            type: DataTypes.TEXT
        },
        wiki_link: {
            type: DataTypes.TEXT
        },
        wiki_pageid: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            associate: function(models) {
                this.belongsToMany(models.works, {through:'ArtistComposedWork'});
                this.belongsToMany(models.instruments, {through:'ArtistPlayedInstrument'});
                this.belongsToMany(models.instruments, {through:'ArtistComposedInstrument'});
                this.belongsToMany(models.releases, {through:'ArtistPerformedRelease'});

                this.belongsTo(models.entities);
            }
        }
    });
};
