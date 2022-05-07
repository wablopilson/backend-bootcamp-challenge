const { Schema, model } = require('mongoose')

const restaurantSchema = new Schema({
    name: String,
    adress: String,
}, {
    timestamps: true
})

module.exports = model("Restaurant", restaurantSchema)