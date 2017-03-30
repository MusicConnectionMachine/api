'use strict';
module.exports = function(context) {
    var websites = context.component('models').module('websites');

    return {
        findAllWebsites: function() {
            return websites.findAll({
                attributes: [
                    'id', 'url', 'blob_url'
                ]
            });
        },
        findWebsiteById: function(website_id) {
            return websites.findOne({
                where: {
                    id: website_id
                },
                attributes: [
                    'id', 'url', 'blob_url'
                ]
            });
        },
        addWebsite: function(website_obj) {
            websites.create(website_obj).then(function() {
                return websites.findAll({
                    attributes: [
                        'id', 'url', 'blob_url'
                    ]
                });
            });
        },
        updateWebsite: function(website_obj) {
            websites.update(website_obj).then(function() {
                return websites.findAll({
                    attributes: [
                        'id', 'url', 'blob_url'
                    ]
                });
            });
        },
        deleteWebsite: function(id) {
            websites.findById(id).then(function(obj) {
                obj.destroy().then(function() {
                    return websites.findAll({
                        attributes: [
                            'id', 'url', 'blob_url'
                        ]
                    });
                });
            });
        }
    }
};