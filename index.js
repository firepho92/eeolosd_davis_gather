const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 31001
const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const MONGODB_HOST = process.env.MONGODB_HOST
const MONGODB_DB = process.env.MONGODB_DB
const bodyParser = require('body-parser')
const routes = require('./routes')
const {fetchReadings} = require('./controllers/davisController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('/', routes)
// console.log(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DB}?retryWrites=true&w=majority`)
mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err, res) => {
  if(err) console.log('Error connecting to database: ' + err)
  console.log('connected to mongo atlas')
})

setInterval(async () => {
  const data = await fetchReadings()
  // console.log('last gathering', new Date())
  // console.log('gatheredData', data)
}, 5 * 60 * 1000)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})