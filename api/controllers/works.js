'use strict';

var context = require('../../database.js').getContext();
var works = require('../dsap/works.js')(context);

module.exports = {
    getAllWorks: getAllWorks,
    getWorkByID: getWorkByID,
    addWorks: addWorks,
    updateWork: updateWork,
    deleteWork: deleteWork
};

function getAllWorks(req, res) {
    var query = req.swagger.params.q.value;
    var limit = req.swagger.params.limit.value;
    var offset = req.swagger.params.offset.value;

    works.findAllWorks(query, {limit: limit, offset: offset}).then(function(list) {
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
