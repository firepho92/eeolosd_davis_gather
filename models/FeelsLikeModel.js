const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeelsLikeModel = new Schema({
  value: {type: String},
  ema: {type: String},
  datetime: {type: String}
})

module.exports = mongoose.model('FeelsLike', FeelsLikeModel)