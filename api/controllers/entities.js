'use strict';

var context = require('../../database.js').getContext();
var entities = require('../dsap/entities.js')(context);

module.exports = {
    getAllEntities: getAllEntities,
    getEntityByID: getEntityByID,
    addEntity: addEntity,
    updateEntity: updateEntity,
    deleteEntity: deleteEntity
};

function getAllEntities(req, res) {
    entities.findAllEntities().then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getEntityByID(req, res) {
    var id = req.swagger.params.id.value;
    entities.findEntitiesById(id).then(function(entityInfo) {
        res.status(200).json(entityInfo);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

//add one entity
function addEntity(req, res) {
    var entityObject = req.body;
    entities.addEntity(entityObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

//update one entity
function updateEntity(req, res) {
    var id = req.swagger.params.id.value;
    var entityObject = req.body;
    entities.updateEntity(id, entityObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function deleteEntity(req, res) {
    var id = req.swagger.params.id.value;
    entities.deleteEntity(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}
