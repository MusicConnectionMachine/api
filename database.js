var context;

module.exports = {
    start: function(callback) {
        callback = callback || function() {};

        // Imports
        const pg = require('pg');
        const fs = require('fs');
        const path = require('path');
        const Sequelize = require('sequelize');

        console.log('Initializing context');
        // Initialize the context
        context = {
            fs: fs,
            pg: pg,
            path: path,
            Sequelize: Sequelize,
            constants: {}
        };

        // Function to load all components from the respective folders (models, controllers,  )
        context.component = function(componentName) {
            if (!context[componentName]) {
                context[componentName] = {};
            }

            return {
                module: function(moduleName) {
                    if (!context[componentName][moduleName]) {
                        console.log('Loading component ' + componentName);
                        context[componentName][moduleName] = require(path.join(__dirname, "api", componentName, moduleName))(context,
                            componentName, moduleName);
                        console.log('LOADED ' + componentName + '.' + moduleName);
                    }

                    return context[componentName][moduleName];
                }
            }
        };

        callback(context);
        return context;
    },
    connect: function(postgresCS,callback) {
        const context = this.createContext(postgresCS);

        this.loadModels(() => {
            return context.sequelize
                .authenticate()
                .then(function (err) {
                    console.log('Connection has been established successfully.');
                    return callback(context);
                })
                .catch(function (err) {
                    // Logs all application errors that happen after succesful db test OR error in connecting to DB

                    console.error(err.code);
                    console.error(err);
                    return process.exit(1);
                });
        });
    },
    loadModels: function(callback) {
        context.fs.readdir(context.path.join(__dirname, 'api', 'models'), (err, files) => {
            //Load ALL modules.
            //Don't get confused by weird logging order! console.log is async and will mix up the actual loading order.
            files.forEach(file => {
                context.component('models').module(file.replace('.js', ''));
            });

            context.component('helpers').module('buildRelations')();

            callback();
        });
    },
    createContext: function(postgresCS) {
        context = this.start();

        var dbConfig = require('./config.js.template');

        //Create the DB connection string
        var databaseParams = dbConfig.database;
        context.config = databaseParams;

        var configDB = {
            database: databaseParams.collection, //env var: PGDATABASE
            username: databaseParams.username,
            password: databaseParams.password,
            host: databaseParams.host, // Server hosting the postgres database
            port: databaseParams.port, //env var: PGPORT
            max: 10, // max number of clients in the pool
            min: 0,
            idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed

        };

        const databaseURI = postgresCS||process.env.databaseuri;

        if (databaseURI) {
            context.sequelize = new context.Sequelize(databaseURI, dbConfig);
        } else {
            context.sequelize = new context.Sequelize(configDB.database, configDB.username, configDB.password, {
                host: configDB.hostname,
                dialect: 'postgres',
                port: configDB.port,
                pool: {
                    max: configDB.max,
                    min: configDB.min,
                    idle: configDB.idleTimeoutMillis
                }
            });
        }

        return context;
    },
    getContext: function() {
        if(context) {
            return context;
        }
        console.log('Failed to retrieve context: context doesn\'t exist.');
    }
}
