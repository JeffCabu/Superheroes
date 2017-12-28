const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SuperHero = new Schema({
  name: { type: String, required: true },
  superPower: String,
  img: { type: String, required: true },
  universe: String,
  nemesis: {type: Schema.Types.ObjectId, ref: 'Villains'},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

module.exports = mongoose.model('SuperHero', SuperHero)
