'use strict';

var context = require('../../database.js').getContext();
var relationships = require('../dsap/relationships.js')(context);

module.exports = {
    getAllRelationships: getAllRelationships,
    getRelationshipByID: getRelationshipByID,
    addRelationship: addRelationship,
    updateRelationship: updateRelationship,
    deleteRelationship: deleteRelationship
};

function getAllRelationships(req, res) {
    relationships.findAllRelationships().then(function(list) {
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

