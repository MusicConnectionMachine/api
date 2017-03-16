/**
 * Created by TimH on 16-Mar-17.
 */
var config = require(__dirname + '/config.js');
var Sequelize = require('sequelize');

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

//create schema for "artist"
var artist = sequelize.define('artist', {
    name: {
        type: Sequelize.TEXT
    },
    artist_id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    // ?How should we proceed with "group"?
    artist_type: {
        type: Sequelize.ENUM('composer', 'musician')
    },
    gender: {
        type: Sequelize.ENUM('male', 'female')
    },
    picture: {
        type: Sequelize.BLOB
    },
    dateOfBirth: {
        type: Sequelize.DATEONLY
    },
    placeOfBirth: {
        type: Sequelize.TEXT
    },
    dateOfDeath: {
        type: Sequelize.DATEONLY
    },
    placeOfDeath: {
        type: Sequelize.TEXT
    },
    nationality: {
        type: Sequelize.TEXT
    },
    tags: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    source_link: {
        type: Sequelize.TEXT
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

//create schema for "release"
var release = sequelize.define('release', {
    title: {
        type: Sequelize.TEXT
    },
    release_id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    // ?How should we proceed with "group"?
    artist_type: {
        type: Sequelize.ENUM('composer', 'musician')
    },
    format: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.DATEONLY
    },
    country: {
        type: Sequelize.TEXT
    },
    label: {
        type: Sequelize.TEXT
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

//create schema for "recording"
var recording = sequelize.define('recording', {
    title: {
        type: Sequelize.TEXT
    },
    recording_id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATEONLY
    },
    length: {
        type: Sequelize.TIME
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

//create schema for "work"
var work = sequelize.define('work', {
    title: {
        type: Sequelize.TEXT
    },
    work_id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    compositionyear: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

//create schema for "instrument"
var instrument = sequelize.define('instrument', {
    name: {
        type: Sequelize.TEXT
    },
    instrument_id: {
        type: Sequelize.UUID,
        primaryKey: true
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

//create schema for "group"
var group = sequelize.define('group', {
    name: {
        type: Sequelize.TEXT
    },
    group_id: {
        type: Sequelize.UUID,
        primaryKey: true
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

artist.sync({force: true});
release.sync({force: true});
recording.sync({force: true});
work.sync({force: true});
instrument.sync({force: true});
group.sync({force: true});
