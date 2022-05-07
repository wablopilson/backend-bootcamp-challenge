const { Schema, model } = require('mongoose')

const eaterSchema = new Schema({
  name: String,
  email: String,
}, {
  timestamps: true
})

module.exports = model("Eater", eaterSchema)