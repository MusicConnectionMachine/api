'use strict';

var context = require('../../database.js').getContext();
var events = context.component('dsap').module('events');

module.exports = {
    getAllEvents: getAllEvents,
    getEventByID: getEventByID,
    addEvent: addEvent,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent
};

function getAllEvents(req, res) {
    events.findAllEvents().then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function getEventByID(req, res) {
    var id = req.swagger.params.id.value;
    events.findEventById(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}


function addEvent(req, res) {
    var eventObj = req.body;
    events.addEvent(eventObj).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}


function updateEvent(req, res) {
    var id = req.swagger.params.id.value;
    var eventObj = req.body;
    events.updateEvent(id, eventObj).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

function deleteEvent(req, res) {
    var id = req.swagger.params.id.value;
    events.deleteE(id).then(function(list) {
        res.status(200).json(list);
    }).catch(function(error) {
        res.status(500).send(error);
    });
}

