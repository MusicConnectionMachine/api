'use strict';
module.exports = function(context) {
    var relationships = context.models.relationships;

    return {
        findAllRelationships: function() {
            return relationships.findAll({
                attributes: [
                    'id'
                ]
            });
        },
        findRelationshipById: function(relationship_id) {
            return relationships.findOne({
                where: {
                    id: relationship_id
                },
                attributes: [
                    'id'
                ]
            });
        },
        addRelationship: function(relationship_obj) {
            relationships.create(relationship_obj).then(function() {
                return relationships.findAll({
                    attributes: [
                        'id'
                    ]
                });
            });
        },
        updateRelationship: function(relationship_obj) {
            relationships.update(relationship_obj).then(function() {
                return relationships.findAll({
                    attributes: [
                        'id'
                    ]
                });
            });
        },
        deleteRelationship: function(id) {
            relationships.findById(id).then(function(obj) {
                obj.destroy().then(function() {
                    return relationships.findAll({
                        attributes: [
                            'id'
                        ]
                    });
                });
            });
        }
    }
};
