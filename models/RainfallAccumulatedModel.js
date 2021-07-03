const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RainfallAccumulatedModel = new Schema({
  value: {type: String},
  ema: {type: String},
  datetime: {type: String}
})

module.exports = mongoose.model('RainfallAccumulated', RainfallAccumulatedModel)