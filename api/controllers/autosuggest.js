'use strict';

var context = require('../../database.js').getContext();

module.exports = {
    getSearchSuggestions: getSearchSuggestions,
};

function getSearchSuggestions(req, res) {
    res.status(501);
    res.json('Not implemented!');
}
