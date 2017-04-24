'use strict';
module.exports = function(context) {
    var feedbacks = context.models.relationsFeedbacks;

    return {
        findAllRelationsFeedbacks: function() {
            return feedbacks.findAll({
                attributes: [
                    'id', 'feedback', 'relationshipId'
                ]
            });
        },
        addRelationsFeedback: function(data) {
            return feedbacks.create(data);
        }
    }
};
