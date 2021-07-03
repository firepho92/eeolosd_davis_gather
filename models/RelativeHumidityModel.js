const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RelativeHumidityModel = new Schema({
  value: {type: String},
  ema: {type: String},
  datetime: {type: String}
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

module.exports = mongoose.model('RelativeHumidity', RelativeHumidityModel)