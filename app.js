'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing


var config = {
    appRoot: __dirname, // required config
    swaggerFile: __dirname + '/api/swagger/swagger.json'
};


require('./index.js').connect(function (context) {


    SwaggerExpress.create(config, function (err, swaggerExpress) {
        context.sequelize.sync({force: true}).then(function () {

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

