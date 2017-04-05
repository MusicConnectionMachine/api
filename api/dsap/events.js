'use strict';
module.exports = function(context) {
    var events = context.models.events;

    return {
        findAllEvents: function() {
            return events.findAll({
                attributes: [
                    'id', 'start', 'end', 'description'
                ]
            });
        },
        findEventById: function(event_id) {
            return events.findOne({
                where: {
                    id: event_id
                },
                attributes: [
                    'id', 'start', 'end', 'description'
                ]
            });
        },
        addEvent: function(event_obj) {
            events.create(event_obj).then(function() {
                return events.findAll({
                    attributes: [
                        'id', 'start', 'end', 'description'
                    ]
                });
            });
        },
        updateEvent: function(event_obj) {
            events.update(event_obj).then(function() {
                return events.findAll({
                    attributes: [
                        'id', 'start', 'end', 'description'
                    ]
                });
            });
        },
        deleteEvent: function(id) {
            events.findById(id).then(function(obj) {
                obj.destroy().then(function() {
                    return events.findAll({
                        attributes: [
                            'id', 'start', 'end', 'description'
                        ]
                    });
                });
            });
        }
    }
};
