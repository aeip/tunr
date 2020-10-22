const router = require('express').Router()
const Song = require('../model/song')
const data = require('../db/data')

//get all songs
router.get('/', async (req, res) => {
   res.json(await Song.find())
})

//make new song
router.post('/', async (req, res) => {
    res.json(await Song.create(req.body))
})

//get favorites only
router.get('/favorites', async (req, res) => {
    res.json(await Song.find({isFavorite: true}))
})

//toggle favorite
router.put('/favorites/:id', async (req, res) => {
    const song = await Song.findById(req.params.id)
    console.log(song.isFavorite)
    res.json(await Song.findByIdAndUpdate(req.params.id, {isFavorite: !song.isFavorite}, {new:true}))
})

//delete song
router.delete('/:id', async (req, res) => {
    res.json(await Song.findByIdAndRemove(req.params.id))
})

module.exports = router