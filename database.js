const path = require('path');
const fs = require('fs');

var context;

module.exports = {
    start: function(callback) {
        callback = callback || function() {};

        // Imports
        const pg = require('pg');
        const Sequelize = require('sequelize');

        console.log('Initializing context');
        // Initialize the context
        context = {
            fs: fs,
            pg: pg,
            path: path,
            Sequelize: Sequelize,
            constants: {},
            models: {}
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
        const modelBasePath = path.join(__dirname, 'api', 'models');

        fs.readdir(modelBasePath, (err, files) => {
            files.forEach((file) => {
                const model = context.sequelize.import(path.join(modelBasePath, file));
                context.models[model.name] = model;
            });

            // initialize relationships
            Object.keys(context.models).forEach(function(modelName) {
                if ("associate" in context.models[modelName]) {
                    context.models[modelName].associate(context.models);
                }
            });

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

        const databaseURI = postgresCS || process.env.databaseuri;

        if (databaseURI) {
            context.sequelize = new context.Sequelize(databaseURI, dbConfig);
        } else {
            context.sequelize = new context.Sequelize(configDB.database, configDB.username, configDB.password, {
                host: configDB.host,
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
};
