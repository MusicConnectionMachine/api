'use strict';

var context = require('../../database.js').getContext();
var feedbacks = require('../dsap/relationsFeedbacks.js')(context);

module.exports = {
    getAllRelationsFeedbacks: getAllRelationsFeedbacks,
    addRelationsFeedback: addRelationsFeedback,
};

function getAllRelationsFeedbacks(req, res) {
    feedbacks.findAllRelationsFeedbacks().then(function(list) {
        res.status(200).json(list)
    }).catch(function(error) {
        res.status(500).send(error);
    });
}


function addRelationsFeedback(req, res) {
    var feedbackObj = req.body;
    feedbacks.addRelationsFeedback(feedbackObj).then(function() {
        res.status(200).json();
    }).catch(function(error) {
        res.status(500).send(error);
    });
}
