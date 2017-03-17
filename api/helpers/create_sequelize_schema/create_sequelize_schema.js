var Sequelize = require('sequelize');
var fs = require('fs');

//read config file
fs.readFile('config.json', function (err, data) {
    if (err) {
        console.log("Error: " + err)
        return
    }

    var config = data;
    //Sequelize will setup a connection pool on initialization so you should ideally only ever create one instance per database.
    var sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.hostname,
        dialect: 'postgres',
        port: config.port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

    var artist = require('../models/artist');
    var release = require('../models/release');
    var work = require('../models/work');
    var instrument = require('../models/instrument');
    var entity = require('../models/entity');
    var page = require('../models/page');
    var contains = require('../models/contains');
    //var buildRelations = require('../models/buildRelations');



    artist(sequelize, Sequelize).sync({force: true});
    release(sequelize, Sequelize).sync({force: true});
    work(sequelize, Sequelize).sync({force: true});
    instrument(sequelize, Sequelize).sync({force: true});
    entity(sequelize, Sequelize).sync({force: true});
    page(sequelize, Sequelize).sync({force: true});
    contains(sequelize, Sequelize).sync({force: true});
    //buildRelations(sequelize, Sequelize).sync({force: true});
});


