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
    connect: function(callback) {
        const context = this.createContext();

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
    createContext: function() {
        context = this.start();

        var dbconfig = require(__dirname + "/config.js.template");

        //Create the DB connection string
        var databaseParams = dbconfig.database;
        context.config = databaseParams;

        var configDB = {
            database: databaseParams.collection, //env var: PGDATABASE
            host: databaseParams.uri, // Server hosting the postgres database
            port: databaseParams.port, //env var: PGPORT
            max: 10, // max number of clients in the pool
            min: 0,
            idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed

        };
        //prepare connection string
        var dbConnection = "postgres://";
        if(databaseParams.username  && databaseParams.username.length > 0){
            dbConnection += databaseParams.username;
            configDB.user = databaseParams.username;
        }
        if (databaseParams.username  && databaseParams.username.length > 0 && databaseParams.password && databaseParams.password.length > 0) {
            dbConnection += ":" + databaseParams.password;
            configDB.password = databaseParams.password;
        }
        if (databaseParams.username  && databaseParams.username.length > 0) {
            dbConnection += "@";
        }
        dbConnection += databaseParams.uri;
        if(databaseParams.port !== undefined && databaseParams.port !== ""){
            dbConnection += ":" + databaseParams.port;
        }
        if(databaseParams.collection !== undefined && databaseParams.collection !== ""){
            dbConnection += "/" + databaseParams.collection;
        }
        context.pgConnectionString = dbConnection;
        console.log("CONNECTING TO " + dbConnection);

        //initalize Sequelize and create tables
        context.sequelize = new context.Sequelize(dbConnection, {
            host: configDB.hostname,
            dialect: 'postgres',
            port: configDB.port,
            pool: {
                max: configDB.max,
                min: configDB.min,
                idle: configDB.idleTimeoutMillis
            }
        });

        return context;
    },
    getContext: function() {
        if(context) {
            return context;
        }
        console.log('Failed to retrieve context: context doesn\'t exist.');
    }
}
