'use strict';

var context = require('../../database.js').getContext();
var works = require('../dsap/works.js')(context);

module.exports = {
    getAllWorks: getAllWorks,
    getWorkByID: getWorkByID,
    getWorkByArtistID:getWorkByArtistID,
    addWorks: addWorks,
    updateWork: updateWork,
    deleteWork: deleteWork
};

function getAllWorks(req, res) {
    works.findAllWorks().then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getWorkByID(req, res) {
    var id = req.swagger.params.id.value;
    works.findWorksById(id).then(function(artistInfo) {
        res.status(200).json(artistInfo);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function addWorks(req, res) {
    var workObject = req.body;
    works.addWork(workObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function updateWork(req, res) {
    var id = req.swagger.params.id.value;
    var workObject = req.body;
    works.updateWork(id, workObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function deleteWork(req, res) {
    var id = req.swagger.params.id.value;
    works.deleteWork(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getWorkByArtistID(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}
