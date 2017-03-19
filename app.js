'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

//packages for Sequelize and PostgreSQL
var Sequelize = require('sequelize');
var pg = require('pg');
var pg_hstore = require('pg-hstore');
var postgresConfig = require('./config/postgresConfig.json');

var config = {
    appRoot: __dirname, // required config
    swaggerFile: __dirname + '/api/swagger/swagger.json'
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        throw err;
    }

    // install middleware
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    app.listen(port);

    console.log('Server running at http://127.0.0.1:' + port);

});



//initalize Sequelize and create tables
var sequelize = new Sequelize(postgresConfig.database, postgresConfig.username, postgresConfig.password, {
    host: postgresConfig.hostname,
    dialect: 'postgres',
    port: postgresConfig.port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var artists = require('./api/models/artists')(sequelize, Sequelize);
var releases = require('./api/models/releases')(sequelize, Sequelize);
var works = require('./api/models/works')(sequelize, Sequelize);
var instruments = require('./api/models/instruments')(sequelize, Sequelize);
var entitys = require('./api/models/entities')(sequelize, Sequelize);
var pages = require('./api/models/pages')(sequelize, Sequelize);
var contains = require('./api/models/contains')(sequelize, Sequelize);
var buildRelations = require('./api/models/buildRelations')(sequelize, Sequelize)();

sequelize.sync({force:true});
