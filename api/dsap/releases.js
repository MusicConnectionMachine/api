'use strict';
module.exports = function (context) {
    // Imports
    var releases = context.models.releases;
    return {
        findAllReleases: function (searchString, options) {
            let whereClause = {};

            if (searchString != undefined) {
                whereClause = {
                    title: {
                        $ilike: '%' + searchString + '%'
                    }
                }
            }

            return releases.findAndCountAll({
                attributes: ['title', 'id', 'format', 'date', 'country', 'label'],
                where: whereClause,
                order: [['id', 'DESC']],
                limit: options && options.limit,
                offset: options && options.offset
            }).then(results => {
                return {
                    'items': results.rows,
                    'total': results.count
                }
            });
        },
        findReleasesById: function (releaseId) {
            return releases.findOne({
                where: {
                    id: releaseId
                },
                attributes: ['title', 'id', 'format', 'date', 'country', 'label'
                ]
            });
        },
        addRelease: function (releaseObject) {
            releases.create(releaseObject).then(function () {
                return releases.findAll({
                    attributes: ['title', 'id', 'format', 'date', 'country', 'label'
                    ]
                });
            });
        },
        updateRelease: function (id, releaseObject) {
            releases.update(releaseObject).then(function () {
                return releases.findAll({
                    attributes: ['title', 'id', 'format', 'date', 'country', 'label'
                    ]
                });
            });
        },
        deleteRelease: function (id) {
            releases.findById(id).then(function (obj) {
                obj.destroy().then(function () {
                    return releases.findAll({
                        attributes: ['title', 'id', 'format', 'date', 'country', 'label'
                        ]
                    });
                });
            });
        }
    }
}
