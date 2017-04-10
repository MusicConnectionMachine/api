'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var config = require('./config.js.template');
module.exports = app; // for testing


var swaggerConfig = {
    appRoot: __dirname, // required config
    swaggerFile: __dirname + '/api/swagger/swagger.json',
    swaggerSecurityHandlers: {'DefaultSecurity': (req, authOrSecDef, scopesOrApiKey, cb) => {
        if (scopesOrApiKey === config.api.apiKey) {
            cb();
        } else {
            cb(new Error('Wrong or Missing API key'));
        }
    }},
};


require('./database.js').connect(null,function (context) {

    SwaggerExpress.create(swaggerConfig, function (err, swaggerExpress) {
        context.sequelize.sync({force: true}).then(function () {

            if (err) {
                throw err;
            }

            // install middleware
            swaggerExpress.register(app);

            var port = process.env.PORT || 10010;
            app.listen(port);

            console.log('Server running at http://127.0.0.1:' + port);

        })

    });

});

