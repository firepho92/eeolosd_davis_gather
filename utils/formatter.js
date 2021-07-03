const format = (obj) => {
  // console.log(obj.observations[0])
  // console.log(obj.observations[0].solarRadiation)
  // console.log(obj.observations[0].metric_si)
  const formattedData = {
    datetime: obj.observations[0].epoch,
    solarRadiation: obj.observations[0].solarRadiation,
    uv: obj.observations[0].uv,
    windDirection: obj.observations[0].winddir,
    humidity: obj.observations[0].humidity,
    temperature: obj.observations[0].metric_si.temp,
    heatIndex: obj.observations[0].metric_si.heatIndex,
    dewPoint: obj.observations[0].metric_si.dewpt,
    windChill: obj.observations[0].metric_si.windChill,
    windSpeed: obj.observations[0].metric_si.windSpeed,
    windGust: obj.observations[0].metric_si.windGust,
    pressure: obj.observations[0].metric_si.pressure,
    rain: obj.observations[0].metric_si.precipRate,
    rainfallAccumulated: obj.observations[0].metric_si.precipTotal
  }
  return formattedData
}

module.exports = {
  format
}