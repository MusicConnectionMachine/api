'use strict';

module.exports = {
    getAllArtists: getAllArtists,
    getArtistByID: getArtistsByID,
    getArtistByWorkID:getArtistByWorkID,
    addArtists: addArtists,
    updateArtist: updateArtist,
    deleteArtist: deleteArtist

};

function getAllArtists(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getArtistsByID(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function addArtists(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function updateArtist(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function deleteArtist(req, res) {
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}

function getArtistByWorkID(req, res){
    console.log(req.swagger.params);
    res.status(501);
    res.json('Not implemented!');
}
