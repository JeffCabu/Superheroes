const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Villains = new Schema({
  name: { type: String, required: true },
  superPower: String,
  img: { type: String, required: true },
  universe: String,
  nemesis: String
})

module.exports = mongoose.model('Villains', Villains)
