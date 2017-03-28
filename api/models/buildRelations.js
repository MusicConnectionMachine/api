/**
 * this will build the relations between the different tables after those tables were created (this would otherwise cause a referenceNotFound error)
 */
module.exports = function (context) {
    return function () {
        var artists = context.component('models').module('artists');
        var works = context.component('models').module('works');
        var releases = context.component('models').module('releases');
        var instruments = context.component('models').module('instruments');
        var entities = context.component('models').module('entities');
        var websites = context.component('models').module('websites');
        var contains = context.component('models').module('contains');


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
        contains.belongsTo(websites);
        contains.belongsTo(entities);



    }
};
