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
        findReleasesById: function (release_id) {
            return releases.findOne({
                where: {
                    id: release_id
                },
                attributes: ['title', 'id', 'format', 'date', 'country', 'label'
                ]
            });
        },
        addRelease: function (release_obj) {
            releases.create(release_obj).then(function () {
                return releases.findAll({
                    attributes: ['title', 'id', 'format', 'date', 'country', 'label'
                    ]
                });
            });
        },
        updateRelease: function (id, releaseObject) {
            releases.update(release_obj).then(function () {
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
