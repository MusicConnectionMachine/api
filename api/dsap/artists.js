'use strict';

var config = require('../../config.js.template');

module.exports = function(context) {
    var models = context.models;
    var artists = models.artists;

    return {
        findAllArtists: function (searchString, options) {
            let whereClause = {};

            if (searchString != undefined) {
                whereClause = {
                    name: {
                        $ilike: '%' + searchString + '%'
                    }
                }
            }

            let limit = config.api.maxLimit;

            if (options && options.limit && options.limit < limit) {
                limit = options.limit;
            }

            return artists.findAndCountAll({
                attributes: ['name', 'id', 'artist_type', 'dateOfBirth', 'placeOfBirth', 'dateOfDeath',
                    'placeOfDeath', 'nationality', 'tags', 'pseudonym', 'source_link', 'wiki_link', 'wiki_pageid'
                ],
                where: whereClause,
                order: [['id', 'DESC']],
                limit: limit,
                offset: options && options.offset
            }).then(results => {
                return {
                    'items': results.rows,
                    'total': results.count
                }
            });
        },
        findArtistsById: function (artist_id) {
            return artists.findOne({
                where: {
                    id: artist_id
                },
                attributes: ['name', 'id', 'artist_type', 'dateOfBirth', 'placeOfBirth', 'dateOfDeath',
                    'placeOfDeath', 'nationality', 'tags', 'pseudonym', 'source_link', 'wiki_link', 'wiki_pageid'
                ]
            });
        },
        findArtistWithEvents: function (artist_id) {
            return artists.findOne({
                where: {
                    id: artist_id
                },
                attributes: [],
                include: [{
                    model: models.entities,
                    attributes: ['id'],
                    include: [{
                        model: models.events,
                        attributes: ['id', 'start', 'end', 'description']
                    }]
                }]
            });
        },
        addArtist: function (artist_obj) {
            artists.create(artist_obj).then(function () {
                return artists.findAll({
                    attributes: ['name', 'id', 'artist_type', 'dateOfBirth', 'placeOfBirth', 'dateOfDeath',
                        'placeOfDeath', 'nationality', 'tags', 'pseudonym', 'source_link', 'wiki_link', 'wiki_pageid'
                    ]
                });
            });
        },
        updateArtist: function (id, artistObject) {
            artists.update(artistObject).then(function () {
                return artists.findAll({
                    attributes: ['name', 'id', 'artist_type', 'dateOfBirth', 'placeOfBirth', 'dateOfDeath',
                        'placeOfDeath', 'nationality', 'tags', 'pseudonym', 'source_link', 'wiki_link', 'wiki_pageid'
                    ]
                });
            });
        },
        deleteArtist: function (id) {
            artists.findById(id).then(function (obj) {
                obj.destroy().then(function () {
                    return artists.findAll({
                        attributes: ['name', 'id', 'artist_type', 'dateOfBirth', 'placeOfBirth', 'dateOfDeath',
                            'placeOfDeath', 'nationality', 'tags', 'pseudonym', 'source_link', 'wiki_link', 'wiki_pageid'
                        ]
                    });
                });
            });
        }
    }
}
