'use strict';
module.exports = function(context) {
    var relationships = context.component('models').module('relationships');

    return {
        findAllRelationships: function() {
            return relationships.findAll({
                attributes: [
                    'id', 'relationship_occurrence', 'relationship_quality'
                ]
            });
        },
        findRelationshipById: function(relationship_id) {
            return relationships.findOne({
                where: {
                    id: relationship_id
                },
                attributes: [
                    'id', 'relationship_occurrence', 'relationship_quality'
                ]
            });
        },
        addRelationship: function(relationship_obj) {
            relationships.create(relationship_obj).then(function() {
                return relationships.findAll({
                    attributes: [
                        'id', 'relationship_occurrence', 'relationship_quality'
                    ]
                });
            });
        },
        updateRelationship: function(relationship_obj) {
            relationships.update(relationship_obj).then(function() {
                return relationships.findAll({
                    attributes: [
                        'id', 'relationship_occurrence', 'relationship_quality'
                    ]
                });
            });
        },
        deleteRelationship: function(id) {
            relationships.findById(id).then(function(obj) {
                obj.destroy().then(function() {
                    return relationships.findAll({
                        attributes: [
                            'id', 'relationship_occurrence', 'relationship_quality'
                        ]
                    });
                });
            });
        }
    }
};