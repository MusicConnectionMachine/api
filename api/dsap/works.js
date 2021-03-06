'use strict';

var config = require('../../config.js.template');

module.exports = function(context) {
    var works = context.models.works;
    return {
        findAllWorks: function(searchString, options) {
            let whereClause = {};

            if (searchString != undefined) {
                whereClause = {
                    title: {
                        $ilike: '%' + searchString + '%'
                    }
                }
            }

            let limit = config.api.maxLimit;

            if (options && options.limit && options.limit < limit) {
                limit = options.limit;
            }

            return works.findAndCountAll({
                attributes: ['title', 'id', 'compositionyear'],
                where: whereClause,
                order: [['id', 'DESC']],
                limit: limit,
                offset: options && options.offset
            }).then(results => {
                return {
                    'items': results.rows,
                    'total': results.count
                }
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
