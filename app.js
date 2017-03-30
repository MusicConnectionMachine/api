'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing


var config = {
    appRoot: __dirname, // required config
    swaggerFile: __dirname + '/api/swagger/swagger.json'
};


require('./index.js').connect(function (context) {

    context.fs.readdir(context.path.join(__dirname, 'api', 'models'), (err, files) => {
        //Load ALL modules.
        //Don't get confused by weird logging order! console.log is async and will mix up the actual loading order.
        files.forEach(file => {
            context.component('models').module(file.replace('.js',''));
        });

        context.component('helpers').module('buildRelations')();

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


});

