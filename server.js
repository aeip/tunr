require('dotenv').config()
const express = require('express')
const {PORT} = process.env
const cors = require('cors')
const {NODE_ENV= 'development'} = process.env
const morgan = require('morgan')
const app = express()

const seedRouter = require('./controller/seed')
const songsRouter = require('./controller/song')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({hello: "Hello World!"})
})

app.use('/seed', seedRouter)
app.use('/songs', songsRouter)

app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})