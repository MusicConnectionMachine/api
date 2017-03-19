'use strict';

module.exports = {
    getAllReleases: getAllReleases,
    getReleaseByID: getReleaseByID,
    getReleaseByArtistID:getReleaseByArtistID,
    addReleases: addReleases,
    updateRelease: updateRelease,
    deleteRelease: deleteRelease
};

function getAllReleases(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getReleaseByID(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getReleaseByArtistID(req,res){
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function addReleases(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function updateRelease(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function deleteRelease(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}
