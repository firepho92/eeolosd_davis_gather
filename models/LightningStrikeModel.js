const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LightningStrikeModel = new Schema({
  value: {type: String},
  ema: {type: String},
  datetime: {type: String}
})

module.exports = mongoose.model('LightningStrike', LightningStrikeModel)