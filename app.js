'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

//packages for Sequelize and PostgreSQL
var Sequelize = require('sequelize');
var pg = require('pg');
var pg_hstore = require('pg-hstore');
const path= require('path');


var config = {
    appRoot: __dirname, // required config
    swaggerFile: __dirname + '/api/swagger/swagger.json'
};


require(path.join(__dirname, "index.js")).connect(function (context) {


    context.sequelize.sync({force: true}).then(function () {
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
    });


});

