'use strict';

var context = require('../../database.js').getContext();

module.exports = {
    searchEntities: searchEntities,
    searchRelations: searchRelations,
    searchString: searchString
};

function searchEntities(req, res) {
    res.status(501);
    res.json('Not implemented!');
}

function searchRelations(req, res) {
    res.status(501);
    res.json('Not implemented!');
}

function searchString(req, res) {
    res.status(501);
    res.json('Not implemented!');
}
