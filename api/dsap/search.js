'use strict';
module.exports = function (context) {
    const models =  context.models;

    return {
        searchEntities: function(searchString, limit, offset) {
            const artistsSearch = models.artists.findAll({
                where: {
                    name: {
                        $like: '%' + searchString + '%'
                    }
                },
                order: [['id', 'DESC']],
                limit: limit,
                offset: offset
            }).then((results) => {
                return { artists: results }
            });

            const instrumentsSearch = models.instruments.findAll({
                where: {
                    name: {
                        $like: '%' + searchString + '%'
                    }
                },
                order: [['id', 'DESC']],
                limit: limit,
                offset: offset
            }).then((results) => {
                return { instruments: results }
            });

            const releasesSearch = models.releases.findAll({
                where: {
                    title: {
                        $like: '%' + searchString + '%'
                    }
                },
                order: [['id', 'DESC']],
                limit: limit,
                offset: offset
            }).then((results) => {
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
