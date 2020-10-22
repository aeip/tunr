const router = require('express').Router()
const Song = require('../model/song')
const data = require('../db/data')

router.get('/', async (req, res) => {
    await Song.find({}).deleteMany()
    await Song.create({data}).then(res.json({status: 200, data: data}))
    
})

module.exports = router