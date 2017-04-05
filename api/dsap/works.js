'use strict';
module.exports = function(context) {
    var works = context.models.works;
    return {
        findAllWorks: function() {
            return works.findAll({
                attributes: ['title', 'id', 'compositionyear']
            });
        },
        findWorksById: function(work_id) {
            return works.findOne({
                where: {
                    id: work_id
                },
                attributes: ['title', 'id', 'compositionyear']
            });
        },
        addWork: function(workObj) {
            works.create(workObj).then(function() {
                return works.findAll({
                    attributes: ['title', 'id', 'compositionyear']
                });
            });
        },
        updateWork: function(id, workObj) {
            works.update(workObj).then(function() {
                return works.findAll({
                    attributes: ['title', 'id', 'compositionyear']
                });
            });
        },
        deleteWork: function(id) {
            works.findById(id).then(function(obj) {
                obj.destroy().then(function() {
                    return works.findAll({
                        attributes: ['title', 'id', 'compositionyear']
                    });
                });
            });
        }
    }
}
