'use strict';
module.exports = function(context) {
    var contains = context.component('models').module('contains');

    return {
        findAllContains: function() {
            return contains.findAll({
                attributes: [
                    'id', 'occurrences'
                ]
            });
        },
        findContainsById: function(contains_id) {
            return contains.findOne({
                where: {
                    id: contains_id
                },
                attributes: [
                    'id', 'occurrences'
                ]
            });
        },
        addContains: function(contains_obj) {
            contains.create(contains_obj).then(function() {
                return contains.findAll({
                    attributes: [
                        'id', 'occurrences'
                    ]
                });
            });
        },
        updateContains: function(contains_obj) {
            contains.update(contains_obj).then(function() {
                return contains.findAll({
                    attributes: [
                        'id', 'occurrences'
                    ]
                });
            });
        },
        deleteContains: function(id) {
            contains.findById(id).then(function(obj) {
                obj.destroy().then(function() {
                    return contains.findAll({
                        attributes: [
                            'id', 'occurrences'
                        ]
                    });
                });
            });
        }
    }
};