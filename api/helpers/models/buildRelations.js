/**
 * this will build the relations between the different tables after those tables were created (this would otherwise cause a referenceNotFound error)
 */
module.exports = function (sequelize, Sequelize) {
    return function () {
        var artist = require('./artist');
        var work = require('../models/work');
        var release = require('../models/release');
        var instrument = require('../models/instrument');
        var entity = require('../models/entity');
        var page = require('../models/page');
        var contains = require('../models/contains');

        //define relations for artist
        artist(sequelize, Sequelize).belongsToMany(work, {through:workComposedByArtist});
        artist(sequelize, Sequelize).belongsToMany(instrument, {through:instrumentPlayedByArtist});
        artist(sequelize, Sequelize).belongsToMany(instrument, {through:instrumentComposedForByArtist});
        artist(sequelize, Sequelize).belongsToMany(release, {through:releaseByArtist});

        //define relations for work
        work(sequelize, Sequelize).belongsToMany(artist, {through:ArtistWhoComposedWork});

        //define relations for release
        release(sequelize, Sequelize).belongsToMany(artist, {through:ArtistWhoPerformedRelease});

        //define relations for instrument
        instrument(sequelize, Sequelize).belongsToMany(artist, {through:ArtistWhoPlayInstrument});
        instrument(sequelize, Sequelize).belongsToMany(artist, {through:ArtistWhoComposedForInstrument});

        //define relations for contains
        contains(sequelize, Sequelize).belongsTo(page);
        contains(sequelize, Sequelize).belongsTo(entity);



    }
};
