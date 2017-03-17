'use strict';

module.exports = {
    getAllInstruments: getAllInstruments,
    getInstrumentByID: getInstrumentByID,
    getInstrumentByArtistId: getInstrumentByArtistId,
    addInstruments: addInstruments,
    updateInstrument: updateInstrument,
    deleteInstrument: deleteInstrument
};

function getAllInstruments(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getInstrumentByID(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function addInstruments(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function updateInstrument(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function deleteInstrument(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getInstrumentByArtistId(req, res){
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}
