'use strict';
module.exports = function (context) {
    // Imports
    var instruments = context.models.instruments;
    return {
        findAllInstruments: function (searchString, options) {
            let whereClause = {};

            if (searchString != undefined) {
                whereClause = {
                    name: {
                        $ilike: '%' + searchString + '%'
                    }
                }
            }

            return instruments.findAndCountAll({
                attributes: ['name', 'id'],
                where: whereClause,
                order: [['id', 'DESC']],
                limit: options && options.limit,
                offset: options && options.offset
            }).then(results => {
                return {
                    'items': results.rows,
                    'total': results.count
                }
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
