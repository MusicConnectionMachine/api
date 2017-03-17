'use strict';

module.exports = {
    getAllWorks: getAllWorks,
    getWorkByID: getWorkByID,
    getWorkByArtistID:getWorkByArtistID,
    addWorks: addWorks,
    updateWork: updateWork,
    deleteWork: deleteWork
};

function getAllWorks(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getWorkByID(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getWorkByArtistID(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function addWorks(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function updateWork(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function deleteWork(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}
