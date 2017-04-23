'use strict';
module.exports = function (context) {
    var relationships = context.models.relationships;
    var models = context.models;

    const functions = {
        mapArtistToSubject: function (artistId) {
            return models.artists.findById(artistId)
                .then(artist => {
                    return artist.getEntity();
                })
                .then(entity => {
                    return entity.getRelEntity();
                });
        },
        mapWorkToSubject: function (workId) {
            return models.works.findById(workId)
                .then(artist => {
                    return artist.getEntity();
                })
                .then(entity => {
                    return entity.getRelEntity();
                });
        },
        findAllRelationships: function () {
            return relationships.findAll({
                attributes: [
                    'id'
                ]
            });
        },
        findAllRelationshipsBySubject: function (subject, relation, object, offset = 0, limit = 20) {
            var subjectWhere = subject ? { id: subject } : undefined;
            var objectWhere = object ? { id: object } : undefined;
            var relationWhere = relation ? relation : undefined;

            return relationships.findAll({
                attributes: [
                    'id',
                    'confidence',
                    'relation'
                ],
                where: {
                    relation: relationWhere
                },
                include: [
                    { model: models.relationshipDescriptions },
                    { model: models.relationshipOccurrences },
                    { model: models.relationshipEntities, as: 'Subject', where: subjectWhere},
                    { model: models.relationshipEntities, as: 'Object', where: objectWhere }
                ],
                offset,
                limit
            });
        },
        findSuggestions: function (subject, query, offset = 0, limit = 20) {
            // TODO Perform an actual search (Using Elasticsearch? PostgreSQL?)
            return Promise.resolve([]);
        },
        findRelationshipById: function (relationship_id) {
            return relationships.findOne({
                where: {
                    id: relationship_id
                },
                attributes: [
                    'id',
                    'confidence',
                    'relation'
                ],
                include: [
                    { model: models.relationshipDescriptions },
                    { model: models.relationshipOccurrences },
                    { model: models.relationshipEntities, as: 'Subject' },
                    { model: models.relationshipEntities, as: 'Object' }
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
    };

    return functions;
};
