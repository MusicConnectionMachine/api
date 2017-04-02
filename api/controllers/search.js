'use strict';

var context = require('../../database.js').getContext();

module.exports = {
    searchEntities: searchEntities,
    searchRelations: searchRelations,
};

function searchEntities(req, res) {
    res.status(501);
    res.json('Not implemented!');
}

function searchRelations(req, res) {
    res.status(501);
    res.json('Not implemented!');
}
