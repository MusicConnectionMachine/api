'use strict';

module.exports = {
    getMatchingSites: getMatchingSites,
    getWebsiteByID: getWebsiteByID,
    downloadContent: downloadContent,
    addWebsites: addWebsites,
    updateWebsite: updateWebsite,
    deleteWebsite: deleteWebsite
};

function getMatchingSites(req, res) {
    todo(req, res, 'getMatchingSites');
}

function getWebsiteByID(req, res) {
    todo(req, res, 'getWebsiteByID');
}

function downloadContent(req, res) {
    todo(req, res, 'downloadContent');
}

function addWebsites(req, res) {
    todo(req, res, 'addWebsites');
}

function updateWebsite(req, res) {
    todo(req, res, 'updateWebsite');
}

function deleteWebsite(req, res) {
    todo(req, res, 'deleteWebsite');
}

function todo(req, res, funkName) {
    console.log(req.swagger.params);
    res.status(501);
    res.json(funkName + ' not implemented!');
}