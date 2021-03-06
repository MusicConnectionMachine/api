'use strict';

var context = require('../../database.js').getContext();
var artists = require('../dsap/artists.js')(context);

module.exports = {
    getAllArtists: getAllArtists,
    getArtistByID: getArtistByID,
    getEventsOfArtist: getEventsOfArtist,
    addArtist: addArtist,
    updateArtist: updateArtist,
    deleteArtist: deleteArtist
};

function getAllArtists(req, res) {
    var query = req.swagger.params.q.value;
    var limit = req.swagger.params.limit.value;
    var offset = req.swagger.params.offset.value;

    artists.findAllArtists(query, {limit: limit, offset: offset}).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getArtistByID(req, res) {
    var id = req.swagger.params.id.value;
    artists.findArtistsById(id).then(function(artistInfo) {
        res.status(200).json(artistInfo);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getEventsOfArtist(req, res) {
    var id = req.swagger.params.id.value;
    artists.findArtistWithEvents(id).then(function(artistWithEvents) {
        res.status(200).json(artistWithEvents.entity.events);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

//add one artist
function addArtist(req, res) {
    var artistObject = req.body;
    artists.addArtist(artistObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

//update one artist
function updateArtist(req, res) {
    var id = req.swagger.params.id.value;
    var artistObject = req.body;
    artists.updateArtist(id, artistObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function deleteArtist(req, res) {
    var id = req.swagger.params.id.value;
    artists.deleteArtist(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}
