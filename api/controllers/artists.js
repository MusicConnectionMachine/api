'use strict';
module.exports = function (context) {
    // Imports
    var artists = context.component('models').module('artists');

    return {
        getAllArtists: function (req, res) {
            console.log(req.swagger.params);

            artists.findAll(function (err, list) {
                if(err){
                    console.log(err);
                    return
                }
                res.status(200).json(list);
            });
            res.status(501);
            res.json('Not implemented!');
        },
        getArtistsByID: function (req, res) {
            console.log(req.swagger.params);
            res.status(501);
            res.json('Not implemented!');
        },
        addArtists: function (req, res) {
            console.log(req.swagger.params);
            res.status(501);
            res.json('Not implemented!');
        },
        updateArtist: function (req, res) {
            console.log(req.swagger.params);
            res.status(501);
            res.json('Not implemented!');
        },
        deleteArtist: function (req, res) {
            console.log(req.swagger.params);
            res.status(501);
            res.json('Not implemented!');
        },
        getArtistByWorkID: function (req, res) {
            console.log(req.swagger.params);
            res.status(501);
            res.json('Not implemented!');
        }
    }
}
