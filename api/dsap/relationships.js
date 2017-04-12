'use strict';
module.exports = function (context) {
    var relationships = context.models.relationships;

    return {
        findAllRelationships: function () {
            return relationships.findAll({
                attributes: [
                    'id'
                ]
            });
        },
        findRelationshipById: function (relationship_id) {
            return relationships.findOne({
                where: {
                    id: relationship_id
                },
                attributes: [
                    'id'
                ]
            });
        },
        addRelationship: function (relationship_obj) {
            relationships.create(relationship_obj).then(function () {
                return relationships.findAll({
                    attributes: [
                        'id'
                    ]
                });
            });
        },
        updateRelationship: function (relationship_obj) {
            relationships.update(relationship_obj).then(function () {
                return relationships.findAll({
                    attributes: [
                        'id'
                    ]
                });
            });
        },
        deleteRelationship: function (id) {
            relationships.findById(id).then(function (obj) {
                obj.destroy().then(function () {
                    return relationships.findAll({
                        attributes: [
                            'id'
                        ]
                    });
                });
            });
        },
        // returns how often the relationship (defined by same relationship type for same subject and object) occurs
        getRelationshipTrust: function (id) {
            return relationships.findById(id).then((relationship) => {
                if (!relationship) {
                    console.error('relationship not found');
                    return 0;
                }

                if (!relationship.relationshipDescriptionId) {
                    console.error('this relationship hasn\'t been matched to any relationship type');
                    return 1;
                }

                return context.models.relationships.count({
                    where: {
                        subjectId: relationship.subjectId,
                        objectId: relationship.objectId,
                        relationshipDescriptionId: relationship.relationshipDescriptionId
                    }
                });
            });
        }
    }
};
