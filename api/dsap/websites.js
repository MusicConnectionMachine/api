'use strict';
module.exports = function(context) {
    var pages = context.component('models').module('websites');

    return {
        findAllWebsites: function() {
            return websites.findAll({
                attributes: [
                    'id', 'url', 'download_link'
                ]
            });
        },
        findWebsiteById: function(website_id) {
            return websites.findOne({
                where: {
                    id: website_id
                },
                attributes: [
                    'id', 'url', 'download_link'
                ]
            });
        },
        addWebsite: function(website_obj) {
            websites.create(website_obj).then(function() {
                return websites.findAll({
                    attributes: [
                        'id', 'url', 'download_link'
                    ]
                });
            });
        },
        updateWebsite: function(website_obj) {
            websites.update(website__obj).then(function() {
                return websites.findAll({
                    attributes: [
                        'id', 'url', 'download_link'
                    ]
                });
            });
        },
        deleteWebsite: function(id) {
            websites.findById(id).then(function(obj) {
                obj.destroy().then(function() {
                    return websites.findAll({
                        attributes: [
                            'id', 'url', 'download_link'
                        ]
                    });
                });
            });
        }
    }
};