const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  text: {type: String, required: true},
  villain: {type: Schema.Types.ObjectId, ref: 'Villains'},
  hero: {type: Schema.Types.ObjectId, ref: 'SuperHero'}
})

module.exports = mongoose.model('Comment', Comment)
