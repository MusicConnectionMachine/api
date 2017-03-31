'use strict';

var context = require('../../index.js').getContext();
var releases = context.component('dsap').module('releases');

module.exports = {
    getAllReleases: getAllReleases,
    getReleaseByID: getReleaseByID,
    addReleases: addReleases,
    updateRelease: updateRelease,
    deleteRelease: deleteRelease
};

function getAllReleases(req, res) {
    releases.findAllReleases().then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });

}

function getReleaseByID(req, res) {
    var id = req.swagger.params.id.value;
    releases.findReleasesById(id).then(function(releaseInfo) {
        res.status(200).json(releaseInfo);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}


function addReleases(req, res) {
    var releaseObject = req.body;
    releases.addRelease(releaseObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function updateRelease(req, res) {
    var id = req.swagger.params.id.value;
    var releaseObject = req.body;
    releases.updateRelease(id, releaseObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function deleteRelease(req, res) {
    var id = req.swagger.params.id.value;
    releases.deleteRelease(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getReleaseByReleaseID(req,res){
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}
