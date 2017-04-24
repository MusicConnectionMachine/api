'use strict';
module.exports = function (context) {
    const models =  context.models;

    function searchArtists(searchString, options, relation) {
        return models.artists.findAll({
            where: {
                name: {
                    $ilike: '%' + searchString + '%'
                }
            },
            order: [['id', 'DESC']],
            limit: options.limit,
            offset: options.offset
        });
    }

    function searchInstruments(searchString, options) {
        return models.instruments.findAll({
            where: {
                name: {
                    $ilike: '%' + searchString + '%'
                }
            },
            order: [['id', 'DESC']],
            limit: options.limit,
            offset: options.offset
        });
    }

    function searchReleases(searchString, options) {
        models.releases.findAll({
            where: {
                title: {
                    $ilike: '%' + searchString + '%'
                }
            },
            order: [['id', 'DESC']],
            limit: options.limit,
            offset: options.offset
        })
    }

    function searchWorks(searchString, options) {
        models.releases.findAll({
            where: {
                title: {
                    $ilike: '%' + searchString + '%'
                }
            },
            order: [['id', 'DESC']],
            limit: options.limit,
            offset: options.offset
        })
    }

    return {
        searchEntities: function(searchString, limit, offset) {
            const artistsSearch = searchArtists(searchString, {limit: limit, offset: offset})
                .then((results) => {
                    return { artists: results }
                });

            const instrumentsSearch = searchInstruments(searchString, {limit: limit, offset: offset})
                .then((results) => {
                    return { instruments: results }
                });

            const releasesSearch = searchReleases(searchString, {limit: limit, offset: offset})
                .then((results) => {
                    return { releases: results }
                });

            return Promise.all([
                artistsSearch, instrumentsSearch, releasesSearch
            ]).then(function(result) {
                return result;
            });
        }
    }
};
