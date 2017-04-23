'use strict';
module.exports = function(context) {
    var feedbacks = context.models.feedbacks;

    return {
        findAllFeedbacks: function() {
            return feedbacks.findAll({
                attributes: [
                    'id', 'feedback', 'entityId'
                ]
            });
        },
        addFeedback: function(data) {
            return feedbacks.create(data);
        }
    }
};
