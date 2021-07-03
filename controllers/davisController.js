const axios = require('axios')
// const pad = require('../utils/pad')
const {readEmas, createReadings} = require('../services/davisService')
const {format} = require('../utils/formatter')

const fetchReadings = async (req, res) => {
  let data = []
  try{
    const emas = await readEmas()
    // console.log('emas', emas)
    for(let i = 0; i < emas.length; i++) {
      // console.log(emas[i])
      const response = await axios.get(emas[i].ema_url)
      // console.log('response', response.data)
      const formattedData = format(response.data, emas[i].id)
      console.log('formattedData', formattedData)
      for(key in formattedData) {
        // console.log({value: formattedData[key], ema: emas[i].id, datetime: formattedData.datetime}, key)
        await createReadings({value: formattedData[key], ema: emas[i].id, datetime: formattedData.datetime}, key)
      }
      // data = [...data, {formattedData, ema: emas[i].id}]
      //data = [...data, {data: formattedData}]
      //console.log('--------------------------------')
    }
    // res.send(data)
    // return data
  } catch(error) {
    // res.send(error)
    return error
  }
}


module.exports = {
  fetchReadings
}