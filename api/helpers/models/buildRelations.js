/**
 * this will build the relations between the different tables after those tables were created (this would otherwise cause a referenceNotFound error)
 */
module.exports = function (sequelize, Sequelize) {
    return function () {
        var artist = require('./artist')(sequelize, Sequelize);
        var work = require('../models/work')(sequelize, Sequelize);
        var release = require('../models/release')(sequelize, Sequelize);
        var instrument = require('../models/instrument')(sequelize, Sequelize);
        var entity = require('../models/entity')(sequelize, Sequelize);
        var page = require('../models/page')(sequelize, Sequelize);
        var contains = require('../models/contains')(sequelize, Sequelize);

        //define relations for artist
        artist.belongsToMany(work, {through:'ArtistComposedWork'});
        artist.belongsToMany(instrument, {through:'ArtistPlayedInstrument'});
        artist.belongsToMany(instrument, {through:'ArtistComposedInstrument'});
        artist.belongsToMany(release, {through:'ArtistPerformedRelease'});

        //define relations for work
        work.belongsToMany(artist, {through:'ArtistComposedWork'});

        //define relations for release
        release.belongsToMany(artist, {through:'ArtistPerformedRelease'});

        //define relations for instrument
        instrument.belongsToMany(artist, {through:'ArtistPlayedInstrument'});
        instrument.belongsToMany(artist, {through:'ArtistComposedInstrument'});

        //define relations for contains
        contains.belongsTo(page);
        contains.belongsTo(entity);



    }
};
