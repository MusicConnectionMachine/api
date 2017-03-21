'use strict';
module.exports = function (context) {
    // Imports
    var instruments = context.component('models').module('instruments');
    return {
        findAllInstruments: function () {
            return instruments.findAll({
                attributes: ['name', 'id'
                ]
            });
        },
        findInstrumentsById: function (instrument_id) {
            return instruments.findOne({
                where: {
                    id: instrument_id
                },
                attributes: ['name', 'id'
                ]
            });
        },
        addInstrument: function (instrument_obj) {
            instruments.create(instrument_obj).then(function () {
                return instruments.findAll({
                    attributes: ['name', 'id'
                    ]
                });
            });
        },
        updateInstrument: function (id, instrument_obj) {
            instruments.update(instrument_obj).then(function () {
                return instruments.findAll({
                    attributes: ['name', 'id'
                    ]
                });
            });
        },
        deleteInstrument: function (id) {
            instruments.findById(id).then(function (obj) {
                obj.destroy().then(function () {
                    return instruments.findAll({
                        attributes: ['name', 'id'
                        ]
                    });
                });
            });
        }
    }
}
