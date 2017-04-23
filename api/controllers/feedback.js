'use strict';

var context = require('../../database.js').getContext();
var feedbacks = require('../dsap/feedbacks.js')(context);

module.exports = {
    getAllFeedbacks: getAllFeedbacks,
    addFeedback: addFeedback,
};

function getAllFeedbacks(req, res) {
    feedbacks.findAllFeedbacks().then(function(list) {
        res.status(200).json(list)
    }).catch(function(error) {
        res.status(500).send(error);
    });
}


function addFeedback(req, res) {
    var feedbackObj = req.body;
    feedbacks.addFeedback(feedbackObj).then(function() {
        res.status(200).json();
    }).catch(function(error) {
        res.status(500).send(error);
    });
}
