const {client} = require('../settings/mysqlSettings')
const TemperatureModel = require('../models/TemperatureModel')
const WindDirectionModel = require('../models/WindDirectionModel')
const WindSpeedModel = require('../models/WindSpeedModel')
const RelativeHumidityModel = require('../models/RelativeHumidityModel')
const DewPointModel = require('../models/DewPointModel')
const PressureModel = require('../models/PressureModel')
const HeatIndexModel = require('../models/HeatIndexModel')
const WindChillModel = require('../models/WindChillModel')
const RainModel = require('../models/RainModel')
const RainfallAccumulatedModel = require('../models/RainfallAccumulatedModel')
const AverageWindSpeedModel = require('../models/AverageWindSpeedModel')
const UVIndexModel = require('../models/UVIndexModel')
const SolarRadiationModel = require('../models/SolarRadiationModel')

const readEmas = () => {
  return new Promise((resolve, reject) => {
    client.query('SELECT emas.id, emas.name, emas.ema_url FROM emas WHERE ema_type = 3', (error, results, fields) => {
      if (error) {
        reject(error)
      }
      resolve(results)
    })
  })
}

const readAcuriteByUser = (user_id) => {
  return new Promise((resolve, reject) => {
    client.query('SELECT emas.id, emas.name, emas.ema_url FROM users_emas INNER JOIN emas ON users_emas.ema = emas.id WHERE users_emas.user = ?', [user_id], (error, results, fields) => {
      if(error) reject(error)
      resolve(results)
    })
  })
}

const createEma = (ema) => {
  const client = connection.connect()
  client.query('INSERT INTO eeolos SET ?', ema, (error, results, fields) => {
    if(error) throw error
    return results
  })
}

const getLastReadingByCollection = async (collection, ema) => {
  try {
    switch(collection) {
      case 'temperature':
        return await TemperatureModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'humidity':
        return await RelativeHumidityModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'windGust':
        return await WindSpeedModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'windDirection':
        return await WindDirectionModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'dewPoint':
        return await DewPointModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'heatIndex':
        return await HeatIndexModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'windChill':
        return await WindChillModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'pressure':
        return await PressureModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'rain':
        return await RainModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'rainfallAccumulated':
        return await RainfallAccumulatedModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'windSpeed':
        return await AverageWindSpeedModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'uv':
        return await UVIndexModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      case 'solarRadiation':
        return await SolarRadiationModel.findOne({ema}, {}, {sort: {'datetime': -1}})
      default:
        break;
    }
  } catch(error) {
    throw error
  }
}

const createReadings = async(data, type) => {
  let last = null
  console.log(data, type)
  try {
    switch(type) {
      case 'temperature':
        // console.log('tipo', type, 'ema', ema)
        // console.log('largo total', data.length)
        last = await getLastReadingByCollection(type, data.ema)
        // console.log('último', last)
        if(last !== null) {
          if(Number(data.datetime) !== Number(last.datetime)) {
            await TemperatureModel.create(data)
          }
        } else {
          await TemperatureModel.create(data)
        }
        break
      case 'humidity':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await RelativeHumidityModel.create(data)
          }
        } else {
          await RelativeHumidityModel.create(data)
        }
        break
      case 'windSpeed':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await AverageWindSpeedModel.create(data)
          }
        } else {
          await AverageWindSpeedModel.create(data)
        }
        break
      case 'windDirection':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await WindDirectionModel.create(data)
          }
        } else {
          await WindDirectionModel.create(data)
        }
        break
      case 'dewPoint':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await DewPointModel.create(data)
          }
        } else {
          await DewPointModel.create(data)
        }
        break
      case 'heatIndex':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await HeatIndexModel.create(data)
          }
        } else {
          await HeatIndexModel.create(data)
        }
        break
      case 'windChill':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await WindChillModel.create(data)
          }
        } else {
          await WindChillModel.create(data)
        }
        break
      case 'pressure':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await PressureModel.create(data)
          }
        } else {
          await PressureModel.create(data)
        }
        break
      case 'rain':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await RainModel.create(data)
          }
        } else {
          await RainModel.create(data)
        }
        break
      case 'rainfallAccumulated':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await RainfallAccumulatedModel.create(data)
          }
        } else {
          await RainfallAccumulatedModel.create(data)
        }
        break
      case 'windGust':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            console.log('aqui', data)
            await WindSpeedModel.create(data)
          }
        } else {
          await WindSpeedModel.create(data)
        }
        break
      case 'uv':
        last = await getLastReadingByCollection(type, data.ema)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await UVIndexModel.create(data)
          }
        } else {
          await UVIndexModel.create(data)
        }
        break
      case 'solarRadiation':
        last = await getLastReadingByCollection(type, data.ema)
        // console.log('last', last)
        if(last !== null) {
          if(Number(data.datetime !== Number(last.datetime))) {
            await SolarRadiationModel.create(data)
          }
        } else {
          await SolarRadiationModel.create(data)
        }
        break
      default:
        console.log('default', data)
        break
    }
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = {
  readEmas,
  readAcuriteByUser,
  createEma,
  createReadings
}