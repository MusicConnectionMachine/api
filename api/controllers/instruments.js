'use strict';

var context = require('../../database.js').getContext();
var instruments = require('../dsap/instruments.js')(context);

module.exports = {
    getAllInstruments: getAllInstruments,
    getInstrumentByID: getInstrumentByID,
    getInstrumentByWorkID: getInstrumentByWorkID,
    addInstrument: addInstrument,
    updateInstrument: updateInstrument,
    deleteInstrument: deleteInstrument
};

function getAllInstruments(req, res) {
    instruments.findAllInstruments().then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getInstrumentByID(req, res) {
    var id = req.swagger.params.id.value;
    instruments.findInstrumentsById(id).then(function(instrumentInfo) {
        res.status(200).json(instrumentInfo);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

//add one instrument
function addInstrument(req, res) {
    var instrumentObject = req.body;
    instruments.addInstrument(instrumentObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

//update one instrument
function updateInstrument(req, res) {
    var id = req.swagger.params.id.value;
    var instrumentObject = req.body;
    instruments.updateInstrument(id, instrumentObject).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function deleteInstrument(req, res) {
    var id = req.swagger.params.id.value;
    instruments.deleteInstrument(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getInstrumentByWorkID(req, res){
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}
