const { Schema, model } = require('mongoose');

const groupSchema = new Schema(
    {
        leader: {
            type: Schema.Types.ObjectId,
            ref: 'Eater'
        },
        eaters: [{
            type: Schema.Types.ObjectId,
            ref: 'Eater'
        }],
        restaurant: [{
            type: Schema.Types.ObjectId,
            ref: 'Restaurant'
        }]
    },
    { timestamps: true }
)

module.exports = model('Group', groupSchema)