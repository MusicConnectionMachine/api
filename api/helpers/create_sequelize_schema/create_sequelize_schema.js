var Sequelize = require('sequelize');
var config = require('./config.json');

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

var artists = require('../models/artists')(sequelize, Sequelize);
var releases = require('../models/releases')(sequelize, Sequelize);
var works = require('../models/works')(sequelize, Sequelize);
var instruments = require('../models/instruments')(sequelize, Sequelize);
var entitys = require('../models/entities')(sequelize, Sequelize);
var pages = require('../models/pages')(sequelize, Sequelize);
var contains = require('../models/contains')(sequelize, Sequelize);
var buildRelations = require('../models/buildRelations')(sequelize, Sequelize)();

sequelize.sync({force:true});
