const api = require("../database.js");
var mocha = require("mocha");
var assert = require("chai").assert;

var context = '';


describe("db", function() {
    before(function (done) {
        api.connect(null, function (realContext) {
            context = realContext;
            done();
        });
    });
    it("tables should exist", function (done) {

        const expectedResults = [
            'artists',
            'contains',
            'entities',
            'events',
            'instruments',
            'relationshipDescriptions',
            'relationshipEntities',
            'relationshipOccurrences',
            'relationships',
            'relationshipTypes',
            'releases',
            'websites',
            'works'
        ];

        const query = `SELECT table_name
                       FROM information_schema.tables
                       WHERE table_schema='public'
                       AND table_type='BASE TABLE';`;

        context.sequelize.query(query, { type: context.Sequelize.QueryTypes.SELECT})
            .then(function(results) {
                const tableNames = results.map((r) => r.table_name);
                expectedResults.forEach((expected) => {
                    assert.include(tableNames, expected)
                });
                done();
            });
    });
    it("should select from table artists", function (done) {
        require('../api/dsap/artists')(context)
            .findAllArtists()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table entities", function (done) {
        require('../api/dsap/entities')(context)
            .findAllEntities()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table contains", function (done) {
        require('../api/dsap/contains')(context)
            .findAllContains()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table events", function (done) {
        require('../api/dsap/events')(context)
            .findAllEvents()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table instruments", function (done) {
        require('../api/dsap/instruments')(context)
            .findAllInstruments()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table relationships", function (done) {
        require('../api/dsap/relationships')(context)
            .findAllRelationships()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table releases", function (done) {
        require('../api/dsap/releases')(context)
            .findAllReleases()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table websites", function (done) {
        require('../api/dsap/websites')(context)
            .findAllWebsites()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table works", function (done) {
        require('../api/dsap/works')(context)
            .findAllWorks()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
});
