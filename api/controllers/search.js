'use strict';

var context = require('../../database.js').getContext();
var search = require('../dsap/search.js')(context);

module.exports = {
    searchEntities: searchEntities,
    searchRelations: searchRelations,
    searchString: searchString
};

function searchEntities(req, res) {
    const query = req.swagger.params.q.value;
    const limit = req.swagger.params.limit.value;
    const offset = req.swagger.params.offset.value;
    search.searchEntities(query, limit, offset).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function searchRelations(req, res) {
    res.status(501);
    res.json('Not implemented!');
}

function searchString(req, res) {
    res.status(501);
    res.json('Not implemented!');
}
