'use strict';

var context = require('../../database.js').getContext();
var relationships = require('../dsap/relationships.js')(context);

module.exports = {
    getAllRelationships: getAllRelationships,
    getAllRelationshipsByArtist: getAllRelationshipsByArtist,
    getAllRelationshipsByWork: getAllRelationshipsByWork,
    getSuggestionsForArtist: getSuggestionsForArtist,
    getSuggestionsForWork: getSuggestionsForWork,
    getRelationshipByID: getRelationshipByID,
    addRelationship: addRelationship,
    updateRelationship: updateRelationship,
    deleteRelationship: deleteRelationship,
    getRelationshipTrust: getRelationshipTrust
};

function getAllRelationships(req, res) {
    relationships.findAllRelationships().then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getAllRelationshipsByArtist(req, res) {
    _getAllRelationShipsBy(req, res, relationships.mapArtistToSubject);
}

function getAllRelationshipsByWork(req, res) {
    _getAllRelationShipsBy(req, res, relationships.mapWorkToSubject);
}

function _getAllRelationShipsBy(req, res, mappingFunction) {
    var params = req.swagger.params;

    mappingFunction(params.id.value).then(function(subject) {
        return relationships.findAllRelationshipsBySubject(
            subject, params.relation.value, params.object.value, params.offset.value, params.limit.value)
    })
    .then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getSuggestionsForArtist(req, res) {
    _getSuggestionsFor(req, res, relationships.mapArtistToSubject);
}

function getSuggestionsForWork(req, res) {
    _getSuggestionsFor(req, res, relationships.mapWorkToSubject);
}

function _getSuggestionsFor(req, res, mappingFunction) {
    var params = req.swagger.params;
    var subject = mappingFunction(params.id.value);
    relationships.findSuggestions(
        subject, params.q.value, params.offset.value, params.limit.value
    ).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getRelationshipByID(req, res) {
    var id = req.swagger.params.id.value;
    relationships.findRelationshipById(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}


function addRelationship(req, res) {
    var relationshipObj = req.body;
    relationships.addRelationship(relationshipObj).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}


function updateRelationship(req, res) {
    var id = req.swagger.params.id.value;
    var relationshipObj = req.body;
    relationships.updateRelationship(id, relationshipObj).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function deleteRelationship(req, res) {
    var id = req.swagger.params.id.value;
    relationships.deleteRelationship(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getRelationshipTrust(req, res) {
    let id = req.swagger.params.id.value;
    relationships.getRelationshipTrust(id).then(function(count) {
        res.status(200).json(count);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}
