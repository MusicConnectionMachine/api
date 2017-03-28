'use strict';

const path = require('path');
var context = require(path.join(__dirname, '../../index.js')).getContext();
var pages = context.component('dsap').module('websites');

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

function todo(req, res, functionName) {
    console.log(req.swagger.params);
    res.status(501);
    res.json(functionName + ' not implemented!');
}