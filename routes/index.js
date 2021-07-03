const {Router} = require('express')
const {fetchReadings} = require('../controllers/davisController')

const router = Router()

router.get('/davis_gather', (req, res) => res.status(200).send('ok'))
router.get('/davis_gather/fetchReadings', fetchReadings)

module.exports = router