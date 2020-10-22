const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const songSchema = new Schema (
    {
        "title": String,
        "time": String,
        "artist": String
    }
)

const Song = mongoose.model('song', songSchema)

module.exports = Song