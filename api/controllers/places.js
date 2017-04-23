'use strict';

const https = require('https');
const moment = require('moment');
const context = require('../../database.js').getContext();
const artists = require('../dsap/artists.js')(context);


module.exports = {
    getAllPlacesByArtist: getAllPlacesByArtist,
};


function _lookup(s) {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(s);
    return new Promise((resolve) => {
        https.get(url, (res) => {
            const {statusCode} = res;
            if (statusCode !== 200) {
                resolve(null);
            }
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(rawData).results[0]);
                } catch (e) {
                    resolve(null);
                }
            });
        });
    });
}


function _preparePlace(placeString) {
    return new Promise((resolve, reject) => {
        if (!placeString) {
            return reject();
        }
        let result;
        return _lookup(placeString)
            .then((coordLookup) => {
                if (!coordLookup) {
                    reject();
                    throw new Error();
                }
                result = {
                    lat: coordLookup.geometry.location.lat,
                    lng: coordLookup.geometry.location.lng,
                    city: placeString,
                };
            })
            .then(() => _lookup(result.lat + ',' + result.lng))
            .then((cityLookup) => {
                if (cityLookup) {
                    for (let i = 0; i < cityLookup.address_components.length; i++) {
                        const component = cityLookup.address_components[i];
                        if (component.types.includes('administrative_area_level_1')) {
                            result.city = component.long_name;
                            break;
                        }
                    }
                }
            })
            .then(() => resolve(result))
            .catch(() => {
            });
    })
}


function getAllPlacesByArtist(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;

    const places = [];
    let artistInfo;
    artists.findArtistsById(id)
        .catch(function (error) {
            res.status(500).send(error);
        })
        .then((_artistInfo) => {
            artistInfo = _artistInfo;
            return _preparePlace(artistInfo.placeOfBirth)
        })
        .then((birthPlace) => {
            birthPlace.id = '-birth-';
            birthPlace.description = `${artistInfo.name} was born in ${birthPlace.city}`;
            if (artistInfo.dateOfBirth) {
                birthPlace.description += ' on the ' + moment(artistInfo.dateOfBirth).format('Do MMMM YYYY');
            }
            birthPlace.description += '.';
            places.push(birthPlace);
        })
        .catch(() => {})
        .then(() =>  _preparePlace(artistInfo.placeOfDeath))
        .then((deathPlace) => {
            deathPlace.id = '-death-';
            deathPlace.description = `${artistInfo.name} died in ${deathPlace.city}`;
            if (artistInfo.dateOfBirth) {
                deathPlace.description += ' on the ' + moment(artistInfo.dateOfDeath).format('Do MMMM YYYY');
            }
            deathPlace.description += '.';
            places.push(deathPlace);
        })
        .catch(() => {})
        .then(() => res.status(200).json(places));
}
