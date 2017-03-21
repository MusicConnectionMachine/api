'use strict';
const path = require('path');
var context = require(path.join(__dirname, '../../index.js')).getContext();
var artists = context.component('dsap').module('artists');

module.exports = {
    getAllArtists: getAllArtists,
    getArtistByID:getArtistByID,
    addArtist:addArtist,
    updateArtist:updateArtist,
    getArtistByWorkID:getArtistByWorkID,
    deleteArtist:deleteArtist
};

function getAllArtists(req, res) {
    console.log(req.swagger.params);

    artists.findAllArtists().then(function(list) {
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
function getArtistByWorkID(req, res) {
  console.log(req.swagger.params);
  res.status(501);
  res.json('Not implemented!');
}
