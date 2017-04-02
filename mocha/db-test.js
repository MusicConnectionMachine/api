const api = require("../database.js");
var mocha = require("mocha");
var assert = require("chai").assert;

var context = '';


describe("db", function() {
    before(function (done) {
        api.connect(function (realContext) {
            context = realContext;
            done();
        });
    });
    it("should create table artists", function (done) {
        createTable("artists")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table contains", function (done) {
        createTable("contains")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table entities", function (done) {
        createTable("entities")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table events", function (done) {
        createTable("events")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table instruments", function (done) {
        createTable("instruments")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table relationshipDescriptions", function (done) {
        createTable("relationshipDescriptions")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table relationshipEntities", function (done) {
        createTable("relationshipEntities")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table relationshipOccurrences", function (done) {
        createTable("relationshipOccurrences")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table relationships", function (done) {
        createTable("relationships")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table relationshipTypes", function (done) {
        createTable("relationshipTypes")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table releases", function (done) {
        createTable("releases")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table websites", function (done) {
        createTable("websites")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should create table works", function (done) {
        createTable("works")
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table artists", function (done) {
        context.component('dsap').module('artists')
            .findAllArtists()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table entities", function (done) {
        context.component('dsap').module('entities')
            .findAllEntities()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table contains", function (done) {
        context.component('dsap').module('contains')
            .findAllContains()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table events", function (done) {
        context.component('dsap').module('events')
            .findAllEvents()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table instruments", function (done) {
        context.component('dsap').module('instruments')
            .findAllInstruments()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table relationships", function (done) {
        context.component('dsap').module('relationships')
            .findAllRelationships()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table releases", function (done) {
        context.component('dsap').module('releases')
            .findAllReleases()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table websites", function (done) {
        context.component('dsap').module('websites')
            .findAllWebsites()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
    it("should select from table works", function (done) {
        context.component('dsap').module('works')
            .findAllWorks()
            .then(function () {
                done();
            })
            .catch(function (err) {
                done(err);
            });
    });
});

function createTable(module) {
    var model = context.component('models').module(module);
    return model.create({});
}
