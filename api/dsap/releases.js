'use strict';
module.exports = function (context) {
    // Imports
    var releases = context.component('models').module('releases');
    return {
        findAllReleases: function () {
            return releases.findAll({
                attributes: ['title', 'id', 'format', 'date', 'country', 'label'
                ]
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
