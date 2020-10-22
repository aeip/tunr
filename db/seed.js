const mongoose = require('./connection')
const router = require('express').Router()
const Song = require('../model/song')
const data = requrie('./data')

router.get('/', async (req, res) => {
    await Song.find({}).deleteMany()
    await Song.create({data})
})
