const router = require('express').Router()
const Song = require('../model/song')
const data = require('../db/data')

router.get('/', async (req, res) => {
   res.json(await Song.find())
})

module.exports = router