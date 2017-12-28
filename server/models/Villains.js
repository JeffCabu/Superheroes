const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Villains = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  universe: String,
  nemesis: {type: Schema.Types.ObjectId, ref: 'SuperHero'},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

module.exports = mongoose.model('Villains', Villains)
