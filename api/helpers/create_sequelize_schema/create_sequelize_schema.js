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

var artist = require('../models/artist')(sequelize, Sequelize);
var release = require('../models/release')(sequelize, Sequelize);
var work = require('../models/work')(sequelize, Sequelize);
var instrument = require('../models/instrument')(sequelize, Sequelize);
var entity = require('../models/entity')(sequelize, Sequelize);
var page = require('../models/page')(sequelize, Sequelize);
var contains = require('../models/contains')(sequelize, Sequelize);
var buildRelations = require('../models/buildRelations')(sequelize, Sequelize)();

sequelize.sync({force:true});
