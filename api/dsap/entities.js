'use strict';
module.exports = function(context) {
        // Imports
    var entities = context.models.entities;
        //  var works = context.component('models').module('works');
        //returns all entities
    return {
        findAllEntities: function() {
            return entities.findAll({
                attributes: [ 'id'
                ]
            });
        },
        findEntitiesById: function(entity_id) {
            return entities.findOne({
                where: {
                    id: entity_id
                },
                attributes: [ 'id'
                ]
            });
        },
        addEntity: function(entity_obj) {
            entities.create(entity_obj).then(function() {
                return entities.findAll({
                    attributes: [ 'id'
                    ]
                });
            });
        },
        updateEntity: function(id, entityObject) {
            entities.update(entityObject).then(function() {
                return entities.findAll({
                    attributes: [ 'id'
                    ]
                });
            });
        },
        deleteEntity: function(id) {
            entities.findById(id).then(function(obj) {
                obj.destroy().then(function() {
                    return entities.findAll({
                        attributes: [ 'id'
                        ]
                    });
                });
            });
        }
    }
}
