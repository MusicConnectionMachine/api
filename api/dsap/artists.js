'use strict';
module.exports = function (context) {
    // Imports
    var artists = context.component('models').module('artists');
    //  var works = context.component('models').module('works');
    //returns all artists
    return {
        findAllArtists: function () {
            return artists.findAll({
                attributes: ['name', 'id', 'artist_type', 'dateOfBirth', 'placeOfBirth', 'dateOfDeath',
                    'placeOfDeath', 'nationality', 'tags', 'pseudonym', 'source_link', 'wiki_link', 'wiki_pageid'
                ]
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
