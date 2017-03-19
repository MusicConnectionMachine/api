/**
 * this will build the relations between the different tables after those tables were created (this would otherwise cause a referenceNotFound error)
 */
module.exports = function (sequelize, Sequelize) {
    return function () {
        var artists = require('./artists')(sequelize, Sequelize);
        var works = require('works')(sequelize, Sequelize);
        var releases = require('releases')(sequelize, Sequelize);
        var instruments = require('instruments')(sequelize, Sequelize);
        var entities = require('entities')(sequelize, Sequelize);
        var pages = require('pages')(sequelize, Sequelize);
        var contains = require('contains')(sequelize, Sequelize);

        //define relations for artist
        artists.belongsToMany(works, {through:'ArtistComposedWork'});
        artists.belongsToMany(instruments, {through:'ArtistPlayedInstrument'});
        artists.belongsToMany(instruments, {through:'ArtistComposedInstrument'});
        artists.belongsToMany(releases, {through:'ArtistPerformedRelease'});

        //define relations for work
        works.belongsToMany(artists, {through:'ArtistComposedWork'});

        //define relations for release
        releases.belongsToMany(artists, {through:'ArtistPerformedRelease'});

        //define relations for instrument
        instruments.belongsToMany(artists, {through:'ArtistPlayedInstrument'});
        instruments.belongsToMany(artists, {through:'ArtistComposedInstrument'});

        //define relations for contains
        contains.belongsTo(pages);
        contains.belongsTo(entities);



    }
};
