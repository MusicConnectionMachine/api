'use strict';

module.exports = {
    getAllEntities: getAllEntities,
    getEntityByID: getEntityByID,
    addEntities: addEntities,
    updateEntity: updateEntity,
    deleteEntity: deleteEntity
};

function getAllEntities(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getEntityByID(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function addEntities(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function updateEntity(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function deleteEntity(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}